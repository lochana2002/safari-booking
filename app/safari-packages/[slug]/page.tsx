import Image from "next/image";
import Link from "next/link";

const packages: Record<string, any> = {
  "three-hour-safari": {
    title: "Three-Hour Safari",
    price: "Rs. 12,000",
    image: "/morning.webp",
    description:
      "Perfect for early morning wildlife sightings including elephants and birds.",
    details: [
      "⏰ Duration: 3 Hours",
      "🕕 Start Time: 6:00 AM",
      "🚙 Private Jeep",
      "🦌 Best for Elephants",
      "👨‍✈️ Experienced Guide",
    ],
  },

  "half-day-safari": {
    title: "Half-Day Safari",
    price: "Rs. 15,000",
    image: "/evening.jpg",
    description:
      "Enjoy beautiful lighting and cooler temperatures during the afternoon safari.",
    details: [
      "⏰ Duration: 5 Hours",
      "🕒 Start Time: 3:00 PM",
      "🚙 Private Jeep",
      "📸 Ideal for Photography",
      "👨‍✈️ Expert Driver",
    ],
  },

  "full-day-safari": {
    title: "Full-Day Safari",
    price: "Rs. 22,000",
    image: "/full.webp",
    description:
      "Spend the entire day inside Udawalawe National Park for maximum wildlife exposure.",
    details: [
      "⏰ Duration: Full Day",
      "🍽️ Lunch Break Included",
      "🚙 Private Jeep",
      "🦓 Maximum Wildlife Sightings",
      "👨‍✈️ Professional Guide",
    ],
  },
};

export default function PackageDetail({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params?.slug;
  const safariPackage = slug ? packages[slug] : null;

  if (!safariPackage) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Package Not Found
        </h1>
        <Link
          href="/safari-packages"
          className="mt-6 text-green-700 font-semibold underline"
        >
          Back to Safari Packages
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={safariPackage.image}
          alt={safariPackage.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold text-white">
            {safariPackage.title}
          </h1>
          <p className="text-xl text-gray-200 mt-4">
            {safariPackage.price}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Package Overview</h2>
          <p className="text-gray-600">{safariPackage.description}</p>

          <ul className="mt-6 space-y-3">
            {safariPackage.details.map((item: string, i: number) => (
              <li key={i} className="bg-gray-100 px-4 py-3 rounded-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Quick Info</h3>
          <p><strong>Location:</strong> Udawalawe National Park</p>
          <p><strong>Vehicle:</strong> Private Safari Jeep</p>
          <p><strong>Guide:</strong> Local Expert</p>
          <p><strong>Price:</strong> {safariPackage.price}</p>

          <a
            href="https://wa.me/94771234597"
            target="_blank"
            className="block mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-center font-semibold"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
