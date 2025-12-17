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
            backgroundImage: "url('data:image/jpeg;base64,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')", 
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
              className="group bg-white rounded-2xl shadow-xl p-8 border 
                         hover:shadow-2xl transition duration-500 
                         hover:-translate-y-2"
            >
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

      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/94770443323"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-400 hover:bg-green-600 text-white 
             w-14 h-14 rounded-full flex items-center justify-center shadow-xl 
             animate-bounce"
>
  <img src="data:image/jpeg;base64,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" alt="WhatsApp" className="w-8 h-8" />
</a>
    </main>
  );
}
