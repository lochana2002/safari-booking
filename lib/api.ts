export async function createBooking(data: any) {
  const res = await fetch('http://localhost:4000/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to create booking');
  }

  return res.json();
}
