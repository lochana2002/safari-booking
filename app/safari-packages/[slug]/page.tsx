import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeInSection from "@/components/FadeInSection";

const packages = {
  "three-hour-safari": {
    title: "Three-Hour Safari",
    price: "Rs. 12,000",
    image: "/images/morning.webp",
    description:
      "Perfect for early morning wildlife sightings including elephants and birds.",

    details: [
      "⏰ Duration: 3 Hours",
      "🕕 Start Time: 6:00 AM",
      "🚙 Private Safari Jeep",
      "🦌 Best for Elephant Sightings",
      "👨‍✈️ Experienced Local Guide",
    ],

    includes: ["Private Jeep", "Guide", "Fuel"],
    excludes: ["Tickets", "Food"],
    schedule: ["06:00 AM Start", "Wildlife spotting", "09:30 AM Return"],
    notes: ["Bring water", "Wear light clothes"],
  },
};

export default async function SafariDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = packages[slug as keyof typeof packages];

  if (!data) return notFound();

  return (
    <main className="bg-gradient-to-b from-white to-green-50 min-h-screen">

      {/* HERO */}
      <section className="relative h-[65vh] flex items-center justify-center">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            {data.title}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-200">
            Starting from {data.price}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6 py-14 space-y-12">

          {/* OVERVIEW CARD */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-3">
              Overview
            </h2>
            <p className="text-gray-600 text-center leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
              Highlights
            </h2>

            <div className="grid md:grid-cols-2 gap-3">
              {data.details.map((item, i) => (
                <div
                  key={i}
                  className="bg-green-50 text-gray-700 p-3 rounded-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              { title: "✔ Includes", data: data.includes },
              { title: "✖ Excludes", data: data.excludes },
              { title: "Schedule", data: data.schedule },
              { title: "Notes", data: data.notes },
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-5"
              >
                <h3 className="font-bold text-gray-800 mb-3">
                  {section.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {section.data.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="text-center bg-green-900 text-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold mb-3">
              Ready for Your Safari?
            </h2>

            <p className="text-gray-200 mb-6">
              Book now and experience Udawalawe wildlife up close.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="https://wa.me/94771234597"
                target="_blank"
                className="px-8 py-3 bg-white text-green-900 font-semibold rounded-full hover:bg-gray-200 transition"
              >
                Book via WhatsApp
              </a>

              <Link
                href="/safari-packages"
                className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-green-900 transition"
              >
                Back to Packages
              </Link>
            </div>
          </div>

        </section>
      </FadeInSection>
    </main>
  );
}