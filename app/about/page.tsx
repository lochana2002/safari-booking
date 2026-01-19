

export default function About() {
  return (
    <main className="bg-white min-h-screen w-full">

      {/* ================= HERO BANNER ================= */}
      <section
        className="relative h-[60vh] w-full flex items-center justify-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://travel-buddies.com/wp-content/uploads/2025/06/from-colombo-udawalawe-national-park-private-jeep-safari.jpg')"}}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative text-center px-6 animate-heroFade">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Who We Are?
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Discover who we are and why thousands trust us for their Udawalawe safari experience.
          </p>
        </div>

        {/* Hero Animation */}
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
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
  {/* Text */}
  <div>
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Our Vision
    </h2>

    <p className="text-gray-600 leading-relaxed">
      Our vision is to become a trusted and leading safari and rural tourism
      experience provider in Sri Lanka. We aim to connect travelers with nature,
      wildlife, and authentic village life while promoting sustainable tourism
      practices. By offering meaningful experiences, we strive to preserve local
      culture, protect the environment, and create lasting memories for every
      visitor.
    </p>
  </div>

  {/* Image */}
  <div className="rounded-2xl overflow-hidden shadow-lg">
    <img
      src="https://media3.thrillophilia.com/filestore/u4iv0leyh7cspqn55c98kbnu7ir4_shutterstock_1427710394.jpg"
      alt="Our Vision"
      className="w-full h-full object-cover"
    />
  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
  {/* Image */}
  <div className="rounded-2xl overflow-hidden shadow-lg">
    <img
      src="https://holidaylankatours.com/x/cdn/?https://storage.googleapis.com/production-sitelio-v1-0-4/724/1832724/IVSQ6ItC/b2b63758c0cc465ba041ba2f3a2a349a"
      alt="Our Mission"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text */}
  <div>
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Our Mission
    </h2>

    <p className="text-gray-600 leading-relaxed">
      Our mission is to deliver high-quality safari and village experiences with
      professional service and genuine hospitality. We are committed to supporting
      local communities, ensuring guest safety and comfort, and providing
      unforgettable journeys that showcase the natural beauty and cultural
      heritage of Sri Lanka.
    </p>
  </div>
</section>
{/* ================= WHY CHOOSE US ================= */}
<section
  className="relative bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://cdn.tripspoint.com/uploads/photos/8968/udawalawe-national-park-4-hours-private-safari-tour_m8Bs7.jpeg')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-center text-white mb-4">
      Why Choose Us?
    </h2>

    <p className="text-center text-gray-200 mb-14 max-w-3xl mx-auto">
      We provide high-quality safari experiences with professional staff and
      excellent service you can trust.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Experienced Guides",
          desc: "Our guides know the best wildlife locations and ensure a safe, enjoyable journey.",
        },
        {
          title: "Comfortable Jeeps",
          desc: "Well-maintained jeeps designed for the best wildlife viewing experience.",
        },
        {
          title: "Safe & Reliable",
          desc: "We prioritize your safety with reliable service and transparent pricing.",
        },
        {
          title: "No Hidden Charges",
          desc: "We always provide clear pricing with no hidden or unexpected fees.",
        },
        {
          title: "Focus on Your Needs",
          desc: "Tailored safari experiences designed to give you the best trip.",
        },
        {
          title: "Trusted Service",
          desc: "Years of experience serving local and foreign travelers with care.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="border border-white/50 rounded-2xl p-8
                     text-white bg-transparent
                     transition duration-500 hover:-translate-y-2"
        >
          <h3 className="text-2xl font-semibold text-center mb-2">
            {item.title}
          </h3>
          <p className="text-center text-gray-200">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.9s ease-out forwards;
          }
          .animate-fadeInDelay {
            animation: fadeIn 1.4s ease-out forwards;
          }
          .animate-fadeInDelay2 {
            animation: fadeIn 1.8s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      
    </main>
  );
}
