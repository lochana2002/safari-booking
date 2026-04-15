'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PackageCard from "@/components/PackageCard";
import { ChevronDown, Link } from "lucide-react";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

export default function SafariPackages() {

const [loading, setLoading] = useState(false);
const router = useRouter();
const [error, setError] = useState('');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    // 🔒 HARD BLOCK double submit
  if (loading) return;

  setLoading(true);
  setError('');

  const formData = new FormData(e.currentTarget);

  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    adults: Number(formData.get('adults')),
    kids: Number(formData.get('kids')),
    country: formData.get('country'),
    accommodationType: formData.get('accommodationType'),
    message: formData.get('message'),
  };

  try {
    const res = await fetch('http://localhost:4000/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('Booking failed');
    }

    // ✅ Redirect after successful booking
    router.push('/thank-you');

  } catch (err) {
    setError('Failed to submit booking');
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="bg-white min-h-screen w-full">

       {/* ✅ LOADING OVERLAY */}
    {loading && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
          <p className="text-white tracking-widest text-sm uppercase">
            Processing Booking...
          </p>
        </div>
      </div>
    )}

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.leolandtravels.lk/images/destinations/yala-national-park.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center px-6 animate-heroFade">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Safari Packages
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Explore Udawalawe with trusted local safari experts.
          </p>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
  <FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <PackageCard
  title="Three-Hour Safari"
  slug="three-hour-safari"
  price="Rs. 12,000"
  duration="3 Hours"
  badge="Most Popular"
  description="Best viewing time for elephants and wildlife."
  image="https://images.squarespace-cdn.com/content/v1/5a4188e76f4ca304bb0e99ab/1553072783394-N4EDCPCQAK99AKUB4RHQ/udawalawe-safari-19.jpg"
  
/>

<PackageCard
  title="Half-Day Safari"
  slug="half-day-safari"
  price="Rs. 15,000"
  duration="5 Hours"
  badge="Best Value"
  description="Perfect afternoon safari with golden light."
  image="https://udawalawenationalparksrilanka.com/wp-content/uploads/2025/02/Udawalawa-National-Park-Sri-Lanka.jpg"/>

<PackageCard
  title="Full-Day Safari"
  slug="full-day-safari"
  price="Rs. 22,000"
  duration="Full Day"
  badge="Premium"
  description="Maximum wildlife experience with lunch break."
  image="https://res.cloudinary.com/jerrick/image/upload/v1744911855/68013defbdad34001dc248bd.jpg"/>
        </div>
        </FadeInSection>
     

      {/* ---------- ENTRANCE TICKET PRICE SECTION ---------- */}
   <FadeInSection>
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Entrance Tickets Price
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE TEXT */}
          <div className="space-y-4">
            <h3 className="tracking-[0.4em] font-semibold text-lg text-gray-800">
              STAY AWARE 🙂
            </h3>

            <p className="text-gray-500 text-justify">
              Sri Lanka National park entrance fees have been increased for local
              and foreign tourists from the 1st of September 2022 (Gazette
              Notification No. 2292/11 Aug 2022).
            </p>

            <p className="text-gray-500 text-justify">
              You have to buy tickets before you enter the national park from
              the entrance gate. These tickets are issued by Wildlife and
              conservation department. Sometimes the entrance ticket counter is
              busy. Our drivers will support buying tickets.
            </p>

            {/* ELEPHANTS IMAGE */}
            <div className="w-full">
              <Image
                src="/images/ele.png"
                alt="Elephants"
                width={600}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
          </div>

          {/* RIGHT SIDE PRICE TABLE */}
          <div className="w-full">
           {/* RIGHT SIDE PRICE TABLE */}
<div className="w-full">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b border-gray-300">
        <th className="text-lg text-gray-600 font-semibold py-3">Category</th>
        <th className="text-lg text-gray-600 font-semibold py-3">Peak</th>
        <th className="text-lg text-gray-600 font-semibold py-3">Off Peak</th>
      </tr>
    </thead>

    <tbody className="text-gray-700">
      <tr className="border-b border-gray-200">
        <td className="font-medium py-3">Foreign Adult (12+)</td>
        <td className="py-3">$25</td>
        <td className="py-3">$20</td>
      </tr>

      <tr className="border-b border-gray-200">
        <td className="font-medium py-3">Foreign Child (6–12)</td>
        <td className="py-3">$15</td>
        <td className="py-3">$10</td>
      </tr>

      <tr className="border-b border-gray-200">
        <td className="font-medium py-3">SAARC Adult (12+)</td>
        <td className="py-3">$20</td>
        <td className="py-3">$15</td>
      </tr>

      <tr className="border-b border-gray-200">
        <td className="font-medium py-3">SAARC Child (6–12)</td>
        <td className="py-3">$10</td>
        <td className="py-3">$8</td>
      </tr>

      <tr className="border-b border-gray-200">
        <td className="font-medium py-3">Local Adult (12+)</td>
        <td className="py-3">Rs.100</td>
        <td className="py-3">Rs.100</td>
      </tr>

      <tr className="border-b border-gray-200">
        <td className="font-medium py-3">Local Child (6–12)</td>
        <td className="py-3">Rs.50</td>
        <td className="py-3">Rs.50</td>
      </tr>

    </tbody>
  </table>
</div>
<p  className="text-lg text-gray-600 font-semibold py-3">All tickets will be added 15% VAT, Service charges, and Other taxes. * If you stay overnight in the National park this price will be doubled.</p>
          </div>
        </div>
        </FadeInSection>
     
<section
  id="booking-form"
  className="relative min-h-screen flex items-center justify-center text-white"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage:
        "url('https://dynamic-media.tacdn.com/media/photo-o/2f/ab/a7/bb/caption.jpg?w=700&h=500&s=1')",
    }}
  />
  
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  <div className="relative z-20 max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT CONTENT */}
    <div className="animate-heroFade">
      <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
        Reservation
      </p>

      <h1 className="font-serif text-5xl lg:text-6xl mb-6">
        Book your Safari Now...
      </h1>

      <div className="w-32 h-px bg-white mb-6" />

      <p className="max-w-md text-gray-200 leading-relaxed">
        Reserve your Safari early for a quality service. We will provide
        you with the best Safari drivers in Udawalawa National Park.
        We are able to send our jeeps to you. Fill out this form precisely.
      </p>
    </div>

    {/* FORM */}
    <form onSubmit={handleSubmit}
      className="animate-heroFade delay-1 backdrop-blur-xl bg-white/10 rounded-2xl p-8 grid grid-cols-2 gap-4">
     <input name="name" type="text" placeholder="NAME" className="col-span-2 input" disabled={loading} />

<input name="email" type="email" placeholder="EMAIL ADDRESS" className="col-span-2 input" disabled={loading}/>

<input name="phone" type="tel" placeholder="PHONE NUMBER" className="col-span-2 input" disabled={loading}/>

<input name="adults" type="number" placeholder="NO OF ADULTS" className="input" disabled={loading}/>

<input name="kids" type="number" placeholder="NO OF KIDS" className="input" disabled={loading}/>

<select name="country" required className="input text-gray-400" disabled={loading}>
  <option value="">SELECT COUNTRY</option>
  <option value="Sri Lanka">Sri Lanka</option>
  <option value="India">India</option>
  <option value="UK">UK</option>
  <option value="Sri Lanka">USA</option>
  <option value="Sri Lanka">Jerman</option>
  <option value="Sri Lanka">Russia</option>
  <option value="Sri Lanka">France</option>
  <option value="Australia">Australia</option>
  <option value="Other">Other</option>
</select>

<select name="accommodationType" required className="input text-gray-400" disabled={loading}>
  <option value="">ACCOMMODATION TYPE</option>
  <option value="Homestay">Homestay</option>
  <option value="Bungalow">Bungalow</option>
  <option value="Hotel">Hotel</option>
</select>

<textarea
  name="message"
  rows={4}
  placeholder="MESSAGE"
  className="col-span-2 input resize-none" disabled={loading}
/>
      <button
  type="submit"
  disabled={loading}
  className="col-span-2 mt-4 border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition disabled:opacity-50"
>
  {loading ? 'Submitting...' : 'Submit'}
</button>

{error && <p className="col-span-2 text-red-400 text-center">{error}</p>}

    </form>
  </div>
</section>


         {/* ================= FAQ SECTION ================= */}
         <section id="faq">
    <FadeInSection>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          FAQs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Find answers to the most common questions about Udawalawe safaris.
        </p>

        <div className="space-y-4 bg-green-50">
          {[
            {
              q: "What is the best time for a safari?",
              a: "Early morning (6 AM) and evening (3 PM) offer the best wildlife sightings.",
            },
            {
              q: "How long is a safari?",
              a: "A standard safari lasts around 3 hours. Extended tours are available.",
            },
            {
              q: "Is it safe for children?",
              a: "Yes, safaris are family-friendly with safe and comfortable jeeps.",
            },
            {
              q: "What should I bring?",
              a: "Bring water, sunscreen, a hat, camera, and a light jacket.",
            },
            {
              q: "Can I book a private jeep?",
              a: "Yes, private jeeps are available for families, couples, and photographers.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group bg-gradient-to-br from-white to-gray-50 
                         p-6 rounded-2xl shadow-md border hover:shadow-lg 
                         transition duration-300"
            >
              <summary className="flex justify-between items-center cursor-pointer 
                                 text-xl font-semibold text-gray-800">
                {item.q}
                <span className="transition group-open:rotate-180 text-2xl"> <ChevronDown size={18} /></span>
              </summary>

              <p className="text-gray-600 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
        </FadeInSection>
     </section>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          .animate-heroFade {
            animation: heroFade 1.2s ease-out forwards;
          }
          @keyframes heroFade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
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
      </style>
    </main>
  );
}
