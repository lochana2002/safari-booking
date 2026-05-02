'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

useEffect(() => {
  const token = localStorage.getItem('token');

  if (token) {
    console.log('Already logged in');
  }
}, []);

  const login = async () => {
    try {
      const res = await fetch('http://localhost:4001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      router.push('/admin/dashboard');
    } catch {
      alert('Invalid credentials');
    }
  };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
    
    {/* CARD */}
    <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-200">

      {/* LOGO / TITLE */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Admin Panel
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Welcome back 👋 Login to continue
        </p>
      </div>

      {/* FORM */}
      <div className="space-y-4">

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 
                       focus:ring-2 focus:ring-green-500 focus:outline-none
                       transition"
            placeholder="admin@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 
                       focus:ring-2 focus:ring-green-500 focus:outline-none
                       transition"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={login}
          className="w-full mt-4 py-3 rounded-xl bg-green-700 text-white font-semibold
                     hover:bg-green-600 transition duration-300 shadow-md hover:shadow-lg"
        >
          Login
        </button>

      </div>

      {/* FOOTER */}
      <p className="text-center text-xs text-gray-400 mt-6">
        Safari Booking Admin • Secure Access
      </p>
    </div>
  </div>
);
}