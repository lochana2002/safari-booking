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

const handleDelete = async (type: string, id: number) => {
  const token = localStorage.getItem('token');

  if (!confirm('Are you sure?')) return;

  await fetch(`http://localhost:4000/admin/${type}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // remove from UI instantly
  if (type === 'bookings') setBookings(prev => prev.filter(i => i.id !== id));
  if (type === 'rooms') setRooms(prev => prev.filter(i => i.id !== id));
  if (type === 'contacts') setContacts(prev => prev.filter(i => i.id !== id));
};

// Filter data (search)
const filterData = (data: any[]) =>
  data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  // Edit
  const handleEdit = (item: any, type: string) => {
  console.log('Edit:', item);

  // Simple version (alert)
  const newName = prompt('Enter new name', item.name);

  if (!newName) return;

  const token = localStorage.getItem('token');

  fetch(`http://localhost:4000/admin/${type}/${item.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: newName }),
  }).then(() => {
    // refresh UI (simple way)
    location.reload();
  });
};

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

 return (
  <div className="p-10 bg-green-900 min-h-screen">

    {/* HEADER */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl text-gray-900 font-bold">Admin Dashboard</h1>
      <button className="bg-red-800 text-white w-2l px-4 py-15 rounded" onClick={logout}>
        Logout
      </button>
    </div>

    {/* STATS CARDS */}
    <div className="grid grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-300 p-5 rounded-xl shadow">
        <p className="text-gray-800">Total Bookings</p>
        <h2 className="text-2xl text-gray-500 font-bold">{bookings.length}</h2>
      </div>

      <div className="bg-gray-300 p-5 rounded-xl shadow">
        <p className="text-gray-800">Room Bookings</p>
        <h2 className="text-2xl text-gray-500 font-bold">{rooms.length}</h2>
      </div>

      <div className="bg-gray-300 p-5 rounded-xl shadow">
        <p className="text-gray-800">Contacts</p>
        <h2 className="text-2xl text-gray-500 font-bold">{contacts.length}</h2>
      </div>
    </div>

    {/* SEARCH */}
    <input
      type="text"
      placeholder="Search..."
      className="w-3xl mb-6 p-3 border rounded-lg"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    {loading ? (
      <p>Loading...</p>
    ) : (
      <>
        {/* BOOKINGS */}
        <Table
          title="Bookings"
          data={filterData(bookings)}
          onDelete={(id: number) => handleDelete('bookings', id)}
          onEdit={(item: any) => handleEdit(item, 'bookings')}
        />

        {/* ROOMS */}
        <Table
          title="Room Bookings"
          data={filterData(rooms)}
          onDelete={(id: number) => handleDelete('rooms', id)}
          onEdit={(item: any) => handleEdit(item, 'rooms')}
        />

        {/* CONTACTS */}
        <Table
          title="Contacts"
          data={filterData(contacts)}
          onDelete={(id: number) => handleDelete('contacts', id)}
          onEdit={(item: any) => handleEdit(item, 'contacts')}
        />
      </>
    )}
  </div>
);
}