import Image from "next/image";
import { notFound } from "next/navigation";
import { homestayRooms } from "@/lib/homestayRooms";

export default function RoomDetailPage({
  params,
}: {
  params: { room: string };
}) {
  const room = homestayRooms[params.room as keyof typeof homestayRooms];

  if (!room) return notFound();

  const whatsappNumber = "94770443323";

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {room.name}
      </h1>

      {/* Gallery */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {room.images.map((img, i) => (
          <div key={i} className="relative h-64 rounded-xl overflow-hidden">
            <Image src={img} alt={room.name} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Details */}
      <p className="text-gray-600 text-lg mb-4">
        {room.description}
      </p>

      <p className="text-lg mb-2">👥 Max Guests: {room.guests}</p>

      <p className="text-2xl font-bold text-green-700 mb-8">
        Rs. {room.price.toLocaleString()} / night
      </p>

      {/* CTA */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hello 👋\n\nI want to book the ${room.name}.\n📅 Dates:\n👨‍👩‍👧 Guests:`
        )}`}
        target="_blank"
        className="inline-block px-8 py-4 bg-green-700 hover:bg-green-600
                   text-white font-semibold rounded-full shadow-lg transition"
      >
        Book via WhatsApp
      </a>
    </main>
  );
}
