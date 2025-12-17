"use client";

import Image from "next/image";

export default function HomeStayPage() {
  const rooms = [
    {
      name: "Family Room",
      price: 12000,
      guests: 4,
      image: "/rooms/family.jpg",
    },
    {
      name: "Double Room",
      price: 9000,
      guests: 2,
      image: "/rooms/double.jpg",
    },
    {
      name: "Triple Room",
      price: 10000,
      guests: 3,
      image: "/rooms/triple.jpg",
    },
  ];

  const whatsappNumber = "94770443323";

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/homestay/hero.jpg"
          alt="Udawalawe Safari Home Stay"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Udawalawe Safari Home Stay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Peaceful nature stay near Udawalawe National Park — perfect for safari lovers
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          About Our Home Stay
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Our home stay is located just minutes away from Udawalawe National Park.
          Wake up to bird sounds, enjoy home-cooked Sri Lankan meals, and experience
          authentic village hospitality. Ideal for families, couples, and wildlife photographers.
        </p>

        {/* Amenities */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            "Free WiFi",
            "Air Conditioning",
            "Private Bathrooms",
            "Home Cooked Meals",
            "Free Parking",
            "Safari Jeep Pickup",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-green-50 border border-green-100 rounded-xl p-4 text-center font-medium text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= ROOMS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Rooms
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {rooms.map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {room.name}
                  </h3>

                  <p className="text-gray-600">
                    👥 Max Guests: {room.guests}
                  </p>

                  <p className="text-xl font-bold text-green-700">
                    Rs. {room.price.toLocaleString()} / night
                  </p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello 👋\n\nI want to book a room.\n\n🏡 Home Stay: Udawalawe Safari Home Stay\n🛏 Room Type: ${room.name}\n📅 Dates:\n👨‍👩‍👧 Guests:\n🐘 Safari: Yes / No`
                    )}`}
                    target="_blank"
                    className="block text-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md transition"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFARI COMBO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Safari + Stay Packages
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Book your stay with us and enjoy exclusive Udawalawe safari packages
          with experienced drivers and well-maintained jeeps.
        </p>

        <a
          href="/safari-packages"
          className="inline-block px-8 py-3 bg-[#899b22] hover:bg-[#70841a] text-white font-semibold rounded-full shadow-lg transition"
        >
          View Safari Packages
        </a>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Location
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Udawalawe%20National%20Park&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
}
