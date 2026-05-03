'use client';

import { useSearchParams } from 'next/navigation';
import ReviewForm from '@/components/ReviewForm';

export default function ReviewPage() {
  const params = useSearchParams();
  const bookingId = Number(params.get('bookingId'));

  if (!bookingId) {
    return <p>Invalid booking ID</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <ReviewForm bookingId={bookingId} />
    </div>
  );
}