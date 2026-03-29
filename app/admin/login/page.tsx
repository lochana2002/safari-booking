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
      const res = await fetch('http://localhost:4000/auth/login', {
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 p-8 shadow rounded-xl">
        <h1 className="text-2xl mb-4">Admin Login</h1>

        <input
          className="input w-full"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="input mt-2 w-full"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn mt-4 w-full" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}