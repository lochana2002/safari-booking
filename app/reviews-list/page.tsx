'use client';

import { useEffect, useState } from 'react';

export default function ReviewsList({ bookingId }: { bookingId: number }) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [avg, setAvg] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:4001/reviews/booking/${bookingId}`)
      .then(res => res.json())
      .then(setReviews);

    fetch(`http://localhost:4001/reviews/booking/${bookingId}/average`)
      .then(res => res.json())
      .then(data => setAvg(Number(data)));
  }, [bookingId]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">
        ⭐ {avg.toFixed(1)} / 5
      </h2>

      <div className="space-y-3 mt-3">
        {reviews.map((r, i) => (
          <div key={i} className="p-3 border rounded-lg">
            <div className="text-yellow-500">
              {'★'.repeat(r.rating)}
            </div>
            <p className="text-sm">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}