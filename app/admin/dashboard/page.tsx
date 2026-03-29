'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/admin/login');
      return;
    }

    fetch('http://localhost:4000/admin/bookings', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        if (!res.ok) {
          localStorage.removeItem('token');
          router.replace('/admin/login');
          throw new Error();
        }
        return res.json();
      })
      .then(data => setBookings(data))
      .catch(() => setBookings([]))
      .finally(() => setLoading(false));
  }, [router]);

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl">Admin Dashboard</h1>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Adults</th>
              <th>Kids</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.country}</td>
                <td>{b.adults}</td>
                <td>{b.kids}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}