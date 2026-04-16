import Image from "next/image";
import { notFound } from "next/navigation";
import { homestayRooms } from "@/lib/homestayRooms";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

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
      
      <FadeInSection>
      {/* CENTER CONTAINER */}
      <div className="max-w-5xl w-full text-center space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {data.name}
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
  
  {/* BIG IMAGE */}
  <div className="md:col-span-2 relative h-[400px] w-[600px] rounded-xl overflow-hidden">
    <Image
      src={data.images[0]}
      alt={data.name}
      fill
      className="object-cover"
    />
  </div>

  {/* SMALL IMAGES */}
  <div className="grid grid-rows-2 gap-4">
    {data.images.slice(1, 3).map((img, i) => (
      <div key={i} className="relative h-[190px] rounded-xl overflow-hidden">
        <Image
          src={img}
          alt={data.name}
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>

</div>
        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg max-w-9xl mx-auto">
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

         {/* BOOK NOW BUTTON FOR Homestay*/}
  <div className="flex justify-center mt-6">
  <a
    href="/homestay/#booking-form"
    className="inline-block px-8 py-3 bg-green-800 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition"
  >
    Book Your Room Now
  </a>
</div>
      
          {/* CTA SECTION */}
          <div className="text-center bg-green-900 text-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold mb-3">
              Ready for Your Room?
            </h2>

            <p className="text-gray-200 mb-6">
              Book now your room.
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
                 href="/homestay/#rooms"
                className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-green-900 transition"
              >
                Back to Room Packages
              </Link>
            </div>
          </div>
</div>
      </FadeInSection>
    </main>
  );
}