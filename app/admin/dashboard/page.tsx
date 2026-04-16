'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Table from '@/components/Table';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const router = useRouter();

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/admin/login');
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    Promise.all([
      fetch('http://localhost:4000/admin/bookings', { headers }),
      fetch('http://localhost:4000/admin/rooms', { headers }),
      fetch('http://localhost:4000/admin/contacts', { headers }),
    ])
      .then(async ([bRes, rRes, cRes]) => {
        if (!bRes.ok || !rRes.ok || !cRes.ok) {
          localStorage.removeItem('token');
          router.replace('/admin/login');
          throw new Error('Unauthorized');
        }

        const bookingsData = await bRes.json();
        const roomsData = await rRes.json();
        const contactsData = await cRes.json();

        setBookings(bookingsData);
        setRooms(roomsData);
        setContacts(contactsData);
      })
      .catch(() => {
        setBookings([]);
        setRooms([]);
        setContacts([]);
      })
      .finally(() => setLoading(false));
  }, [router]);

  // ---------------- DELETE ----------------
  const handleDelete = async (type: string, id: number) => {
    const token = localStorage.getItem('token');

    if (!confirm('Are you sure?')) return;

    await fetch(`http://localhost:4000/admin/${type}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (type === 'bookings') setBookings(prev => prev.filter(i => i.id !== id));
    if (type === 'rooms') setRooms(prev => prev.filter(i => i.id !== id));
    if (type === 'contacts') setContacts(prev => prev.filter(i => i.id !== id));
  };

  // ---------------- EDIT ----------------
  const handleEdit = async (item: any, type: string) => {
    const newName = prompt('Enter new name', item.name);
    if (!newName) return;

    const token = localStorage.getItem('token');

    await fetch(`http://localhost:4000/admin/${type}/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: newName }),
    });

    location.reload();
  };

  // ---------------- SEARCH ----------------
  const filterData = (data: any[]) =>
    data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );

  // ---------------- LOGOUT ----------------
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  return (
    <div className="p-22 px-10 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 bg-white py-13 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => router.push('/admin/blogs')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Manage Blogs
          </button>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow hover:scale-[1.02] transition">
          <p className="text-gray-800">Total Bookings</p>
          <h2 className="text-3xl font-bold text-gray-800">{bookings.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:scale-[1.02] transition">
          <p className="text-gray-800">Room Bookings</p>
          <h2 className="text-3xl font-bold text-gray-800">{rooms.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:scale-[1.02] transition">
          <p className="text-gray-800">Contacts</p>
          <h2 className="text-3xl font-bold text-gray-800">{contacts.length}</h2>
        </div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search bookings, rooms, contacts..."
        className="w-full text-gray-600 md:w-1/2 mb-8 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CONTENT */}
      {loading ? (
        <p className="text-gray-700">Loading...</p>
      ) : (
        <>
          {/* BOOKINGS */}
          <div className="bg-white text-gray-800 rounded-2xl shadow p-5 mb-10">
            <Table
              title="Bookings"
              data={filterData(bookings)}
              onDelete={(id: number) => handleDelete('bookings', id)}
              onEdit={(item: any) => handleEdit(item, 'bookings')}
            />
          </div>

          {/* ROOMS */}
          <div className="bg-white text-gray-800 rounded-2xl shadow p-5 mb-10">
            <Table
              title="Room Bookings"
              data={filterData(rooms)}
              onDelete={(id: number) => handleDelete('rooms', id)}
              onEdit={(item: any) => handleEdit(item, 'rooms')}
            />
          </div>

          {/* CONTACTS */}
          <div className="bg-white text-gray-800 rounded-2xl shadow p-5">
            <Table
              title="Contacts"
              data={filterData(contacts)}
              onDelete={(id: number) => handleDelete('contacts', id)}
              onEdit={(item: any) => handleEdit(item, 'contacts')}
            />
          </div>
        </>
      )}
    </div>
  );
}