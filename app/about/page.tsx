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
            backgroundImage: "url('/about.jpg')", 
          }}
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

    

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          We provide high-quality safari experiences with professional staff and
          excellent service you can trust.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Experienced Guides",
              desc: "Our guides know the best wildlife locations and ensure a safe, enjoyable journey.",
              icon: "🦁",
            },
            {
              title: "Comfortable Jeeps",
              desc: "Well-maintained jeeps designed for the best wildlife viewing experience.",
              icon: "🚙",
            },
            {
              title: "Safe & Reliable",
              desc: "We prioritize your safety with reliable service and transparent pricing.",
              icon: "🛡️",
            },
            {
              title: "No Hidden Charges",
              desc: "We always provide clear pricing with no hidden or unexpected fees.",
              icon: "✔️",
            },
            {
              title: "Focus on Your Needs",
              desc: "Tailored safari experiences designed to give you the best trip.",
              icon: "🎯",
            },
            {
              title: "Trusted Service",
              desc: "Years of experience serving local and foreign travelers with care.",
              icon: "⭐",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-xl p-8 border 
                         hover:shadow-2xl transition duration-500 
                         hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4 text-5xl">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-center text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}

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
