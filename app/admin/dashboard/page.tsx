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
      fetch('${process.env.NEXT_PUBLIC_API_URL}/admin/bookings', { headers }),
      fetch('${process.env.NEXT_PUBLIC_API_URL}/admin/rooms', { headers }),
      fetch('${process.env.NEXT_PUBLIC_API_URL}/admin/contacts', { headers }),
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

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/${type}/${id}`, {
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

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/${type}/${item.id}`, {
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
  <div className="min-h-screen bg-gray-50 flex">

    {/* ================= SIDEBAR ================= */}
    <aside className="w-64 py-20 bg-white shadow-lg p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Safari Admin
      </h2>

      <nav className="space-y-3 text-gray-700">
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
          Dashboard
        </button>

        <button
          onClick={() => router.push('/admin/blogs')}
          className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          Manage Blogs
        </button>

        <button
          onClick={logout}
          className="w-full text-left px-3 py-2 rounded-lg text-red-500 hover:bg-red-50"
        >
          Logout
        </button>
      </nav>
    </aside>

    {/* ================= MAIN ================= */}
    <main className="flex-1 p-6 md:p-10">

      {/* HEADER */}
      <div className="flex flex-col py-8 md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <input
          type="text"
          placeholder="Search everything..."
          className="w-full md:w-96 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Total Bookings</p>
          <h2 className="text-3xl font-bold text-gray-800">
            {bookings.length}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Room Bookings</p>
          <h2 className="text-3xl font-bold text-gray-800">
            {rooms.length}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Contacts</p>
          <h2 className="text-3xl font-bold text-gray-800">
            {contacts.length}
          </h2>
        </div>

      </div>

      {/* ================= CONTENT CARDS ================= */}
      {loading ? (
        <p className="text-gray-600">Loading dashboard...</p>
      ) : (
        <div className="space-y-8">

          {/* BOOKINGS */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Bookings</h2>
            <Table
              data={filterData(bookings)}
              onDelete={(id: number) => handleDelete('bookings', id)}
              onEdit={(item: any) => handleEdit(item, 'bookings')}
            />
          </div>

          {/* ROOMS */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Room Bookings</h2>
            <Table
              data={filterData(rooms)}
              onDelete={(id: number) => handleDelete('rooms', id)}
              onEdit={(item: any) => handleEdit(item, 'rooms')}
            />
          </div>

          {/* CONTACTS */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Contacts</h2>
            <Table
              data={filterData(contacts)}
              onDelete={(id: number) => handleDelete('contacts', id)}
              onEdit={(item: any) => handleEdit(item, 'contacts')}
            />
          </div>

        </div>
      )}
    </main>
  </div>
);
}