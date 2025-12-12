
import Image from "next/image";

// ---- PACKAGE DATA ---- //
const packages = [
  {
    slug: "three-hour-safari",
    title: "Three-Hour Safari",
    price: "Rs. 12,000",
    image: "/morning.webp",
    description:
      "Best viewing time for elephants and wildlife. This 3-hour safari starts at 6:00 AM for optimal sightings.",
    features: [
      "Guide included",
      "Ideal for morning photography",
      "Covers elephant gathering areas",
    ],
  },
  {
    slug: "half-day-safari",
    title: "Half-Day Safari",
    price: "Rs. 12,000",
    image: "/evening.jpg",
    description:
      "A relaxing half-day safari starting at 3:00 PM. Perfect for golden-hour wildlife viewing.",
    features: [
      "Evening breeze & lighting",
      "Covers multiple lakes",
      "Perfect for bird watching",
    ],
  },
  {
    slug: "full-day-safari",
    title: "Full-Day Safari",
    price: "Rs. 22,000",
    image: "/full.webp",
    description:
      "Spend a full day inside the park with maximum opportunities to see wildlife. Includes lunch break.",
    features: [
      "Longest safari experience",
      "Covers all major zones",
      "Ideal for photography lovers",
    ],
  },
];

// ---- PAGE COMPONENT ---- //
export default function PackagePage({ params }: { params: { slug: string } }) {
  const pkg = packages.find((p) => p.slug === params.slug);

  if (!pkg) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-gray-600">Package not found.</h1>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      
      {/* ---------- HERO IMAGE ---------- */}
      <div className="relative h-[400px] w-full">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {pkg.title}
          </h1>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <section className="max-w-5xl mx-auto mt-12 px-6 space-y-8">

        {/* Title + Price */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl text-gray-700 font-bold">{pkg.title}</h2>
          <p className="text-2xl font-semibold text-green-700">{pkg.price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg">{pkg.description}</p>

        {/* Features */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Highlights</h3>
          <ul className="space-y-2 text-gray-600">
            {pkg.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-600 text-lg">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/94770443323"
            target="_blank"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Contact to Book Now
          </a>
        </div>

      </section>
    </main>
  );
}
