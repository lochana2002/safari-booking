'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      alert('✅ Message sent successfully!');

      setForm({
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
      });
    } catch (err) {
      alert('❌ Failed to send message');
    }

    setLoading(false);
  };

  return (
    <main className="bg-white min-h-screen w-full">

      <section
        id="contact-us"
        className="relative min-h-screen flex items-center justify-center text-white"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://mybreezily.com/wp-content/uploads/2024/10/pngtree-businesswoman-using-contact-icon-interface-photo-image_29649620.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="animate-heroFade">
            <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
              Contact Us
            </p>

            <h1 className="font-serif text-5xl mb-6">
              Get in Touch With Us
            </h1>

            <div className="w-32 h-px bg-white mb-6" />

            <p className="max-w-md text-gray-200">
              Have questions about safaris or bookings? Send us a message.
            </p>

            <div className="space-y-3 mt-6">
              <p><strong>Phone:</strong> +94 77 123 4567</p>
              <p><strong>Email:</strong> udawalawe.safari@gmail.com</p>
              <p><strong>Location:</strong> Udawalawe, Sri Lanka</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="animate-heroFade delay-1 backdrop-blur-xl bg-white/10 rounded-2xl p-8 grid grid-cols-2 gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="FULL NAME"
              className="col-span-2 input"
              required
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="EMAIL ADDRESS"
              className="col-span-2 input"
              required
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="PHONE NUMBER"
              className="col-span-2 input"
            />

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="col-span-2 input text-gray-400"
              required
            >
              <option value="">SELECT INQUIRY TYPE</option>
              <option>Safari Booking</option>
              <option>Room / Accommodation</option>
              <option>Custom Tour</option>
              <option>General Inquiry</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="YOUR MESSAGE"
              className="col-span-2 input resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="col-span-2 mt-4 border border-white px-8 py-3 uppercase tracking-widest
                         hover:bg-white hover:text-black transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-bold text-3xl text-gray-900 text-center mb-8 animate-heroFade">
            Find Us
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg animate-heroFade delay-1">
            <iframe
              src="https://www.google.com/maps?q=Udawalawe%20National%20Park&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ANIMATION STYLE */}
      <style>
        {`
          .animate-heroFade {
            opacity: 0;
            animation: heroFade 1.2s ease-out forwards;
          }

          .delay-1 {
            animation-delay: 0.3s;
          }

          @keyframes heroFade {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </main>
  );
}