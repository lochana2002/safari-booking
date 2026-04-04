import Image from "next/image";
import { notFound } from "next/navigation";
import { homestayRooms } from "@/lib/homestayRooms";

export function generateStaticParams() {
  return Object.keys(homestayRooms).map((key) => ({
    room: key,
  }));
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;
  const slug = room.toLowerCase().trim();

  const data =
    homestayRooms[slug as keyof typeof homestayRooms];

  if (!data) return notFound();

  const whatsappNumber = "94770443323";

  return (
    <main className="bg-white min-h-screen flex items-center justify-center px-6 py-20">
      
      {/* CENTER CONTAINER */}
      <div className="max-w-5xl w-full text-center space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {data.name}
        </h1>

        {/* GALLERY */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.images.map((img, i) => (
            <div key={i} className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={data.name}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {data.description}
        </p>

        {/* ROOM INFO */}
        <div className="flex justify-center text-gray-700 gap-10 text-lg">
          <p>👥 {data.guests} Guests</p>
          <p className="font-semibold text-green-700">
            Rs. {data.price.toLocaleString()} / night
          </p>
        </div>

        {/* 🆕 FACILITIES SECTION */}
        <div className="bg-green-50 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Room Facilities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <p>✅ Air Conditioning</p>
            <p>✅ Free WiFi</p>
            <p>✅ Private Bathroom</p>
            <p>✅ Hot Water</p>
            <p>✅ Comfortable Beds</p>
            <p>✅ Garden View</p>
            <p>✅ Daily Cleaning</p>
            <p>✅ Towels & Toiletries</p>
            <p>✅ Parking Available</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello 👋\n\nI want to book the ${data.name}.\n📅 Dates:\n👨‍👩‍👧 Guests:`
          )}`}
          target="_blank"
          className="inline-block px-10 py-4 bg-green-700 hover:bg-green-600
                     text-white font-semibold rounded-full shadow-lg transition"
        >
          Book via WhatsApp
        </a>

      </div>
    </main>
  );
}