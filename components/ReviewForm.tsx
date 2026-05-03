'use client';

import { useEffect, useState } from 'react';
import StarRating from '@/components/StarRating';

export default function ReviewForm({ bookingId }: { bookingId: number }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [alreadyReviewed, setAlreadyReviewed] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Check if review exists
  useEffect(() => {
    fetch(`http://localhost:4001/reviews/booking/${bookingId}/check`)
      .then(res => res.json())
      .then(data => {
        setAlreadyReviewed(data.reviewed);
        setLoading(false);
      });
  }, [bookingId]);

  const submitReview = async () => {
    if (!rating || !comment) {
      alert('Please fill all fields');
      return;
    }

    const res = await fetch('http://localhost:4001/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating,
        comment,
        bookingId,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      alert(err);
      return;
    }

    alert('Review submitted successfully!');

    setAlreadyReviewed(true); // ✅ disable after submit
  };

  // ⏳ Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // 🚫 Already reviewed
  if (alreadyReviewed) {
    return (
      <div className="p-10 border rounded-xl shadow text-center">
        <h2 className="text-xl font-semibold">
          ✅ You already submitted a review
        </h2>
      </div>
    );
  }

  return (
    <div className="p-10 py-20 border rounded-xl shadow">
      <h1 className="text-xl font-bold mb-2">
        Thank You for Booking with Us!
      </h1>

      <h3 className="font-semibold mb-2">Leave a Review</h3>

      <StarRating rating={rating} setRating={setRating} />

      <textarea
        className="w-full mt-2 border rounded p-2"
        placeholder="Write your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={submitReview}
        className="mt-3 bg-green-700 text-white px-4 py-2 rounded"
      >
        Submit Review
      </button>
    </div>
  );
}