import PackageCard from "@/components/PackageCard";
import Image from "next/image";

export default function SafariPackages() {
  return (
    <main className="bg-white min-h-screen w-full">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/package.jpg')" }}
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
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <PackageCard
  title="Three-Hour Safari"
  slug="three-hour-safari"
  price="Rs. 12,000"
  duration="3 Hours"
  badge="Most Popular"
  description="Best viewing time for elephants and wildlife."
  image="/morning.webp"
/>

<PackageCard
  title="Half-Day Safari"
  slug="half-day-safari"
  price="Rs. 15,000"
  duration="5 Hours"
  badge="Best Value"
  description="Perfect afternoon safari with golden light."
  image="/evening.jpg"
/>

<PackageCard
  title="Full-Day Safari"
  slug="full-day-safari"
  price="Rs. 22,000"
  duration="Full Day"
  badge="Premium"
  description="Maximum wildlife experience with lunch break."
  image="/full.webp"
/>

        </div>
      </section>

         {/* ================= FAQ SECTION ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          FAQs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Find answers to the most common questions about Udawalawe safaris.
        </p>

        <div className="space-y-4">
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
                <span className="transition group-open:rotate-180 text-2xl">⌄</span>
              </summary>

              <p className="text-gray-600 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
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
      </style>

    </main>
  );
}
