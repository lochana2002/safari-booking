"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const packageData: Record<string, any> = {
  "morning-safari": {
    title: "Morning Safari (3 Hours)",
    price: "Rs. 12,000",
  },
  "evening-safari": {
    title: "Evening Safari (3 Hours)",
    price: "Rs. 12,000",
  },
  "full-day-safari": {
    title: "Full-Day Safari",
    price: "Rs. 22,000",
  },
};

export default function BookingPage() {
  const { packageId } = useParams();
  const selectedPackage = packageData[packageId as string];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    adults: 1,
    children: 0,
    pickup: "",
    notes: "",
  });

  function updateField(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <main className="relative min-h-screen w-full">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative max-w-3xl mx-auto px-6 py-20">

        {/* TITLE BLOCK */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Book Your Safari
          </h1>
          <p className="text-lg mt-2 opacity-90">
            {selectedPackage?.title}
          </p>
          <p className="text-green-300 font-semibold text-xl mt-1">
            {selectedPackage?.price}
          </p>
        </div>

        {/* FORM CARD */}
        <form className="bg-white/20 backdrop-blur-xl shadow-xl border border-white/30 rounded-2xl p-10 space-y-6 text-white">

          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2 placeholder-white/60"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2 placeholder-white/60"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2 placeholder-white/60"
              placeholder="+94 ..."
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Safari Date</label>
            <input
              type="date"
              className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2"
              value={form.date}
              onChange={(e) => updateField("date", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Adults</label>
              <input
                type="number"
                min={1}
                className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2"
                value={form.adults}
                onChange={(e) =>
                  updateField("adults", Number(e.target.value))
                }
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Children</label>
              <input
                type="number"
                min={0}
                className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2"
                value={form.children}
                onChange={(e) =>
                  updateField("children", Number(e.target.value))
                }
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Pickup Location</label>
            <input
              type="text"
              className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2 placeholder-white/60"
              placeholder="Hotel or meeting point"
              value={form.pickup}
              onChange={(e) => updateField("pickup", e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Notes (Optional)</label>
            <textarea
              className="w-full bg-white/20 text-white border border-white/40 rounded-lg px-3 py-2"
              rows={4}
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg"
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </main>
  );
}
