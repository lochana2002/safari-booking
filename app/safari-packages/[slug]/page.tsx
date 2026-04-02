'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const packages = {
  "three-hour-safari": {
    title: "Three-Hour Safari",
    price: "Rs. 12,000",
    image: "/images/morning.webp",
    description:
      "Perfect for early morning wildlife sightings including elephants, birds, and other animals in Udawalawe National Park.",

    details: [
      "⏰ Duration: 3 Hours",
      "🕕 Start Time: 6:00 AM",
      "🚙 Private Safari Jeep",
      "🦌 Best for Elephant Sightings",
      "👨‍✈️ Experienced Local Guide",
    ],

    includes: [
      "Private Safari Jeep",
      "Experienced Driver/Guide",
      "Hotel Pickup (optional)",
      "Fuel & Jeep Charges",
    ],

    excludes: [
      "Entrance Ticket Fees",
      "Food & Drinks",
      "Tips & Personal Expenses",
    ],

    schedule: [
      "06:00 AM – Pickup / Meet at entrance",
      "06:30 AM – Enter the park",
      "08:00 AM – Wildlife spotting",
      "09:00 AM – Continue safari",
      "09:30 AM – Exit park",
    ],

    notes: [
      "Wear light comfortable clothing",
      "Bring sunscreen & hat",
      "Carry camera/binoculars",
    ],
  },

  "half-day-safari": {
    title: "Half-Day Safari",
    price: "Rs. 15,000",
    image: "/images/halfday.jpg",
    description:
      "Enjoy beautiful lighting and cooler temperatures during the afternoon safari.",

    details: ["⏰ 5 Hours", "🕒 3:00 PM", "📸 Best for Photography"],

    includes: ["Private Jeep", "Driver", "Fuel"],
    excludes: ["Tickets", "Meals"],
    schedule: ["3 PM Start", "Sunset safari", "Return 8 PM"],
    notes: ["Best lighting for photos"],
  },

  "full-day-safari": {
    title: "Full-Day Safari",
    price: "Rs. 22,000",
    image: "/images/fullday.jpg",
    description:
      "Spend the entire day exploring Udawalawe National Park with maximum wildlife opportunities.",

    details: ["Full Day", "Lunch break", "Max wildlife"],
    includes: ["Jeep", "Guide", "Fuel"],
    excludes: ["Tickets"],
    schedule: ["Morning + Evening safari"],
    notes: ["Best for serious wildlife lovers"],
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const safariPackage =
    packages[slug as keyof typeof packages];

  if (!safariPackage) {
    return <h1 className="text-center mt-20">Package Not Found</h1>;
  }

  const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

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

        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold">
            {safariPackage.title}
          </h1>
          <p className="mt-4 text-xl">
            {safariPackage.price}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
             <motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="relative text-center space-y-3 px-6 py-20
             bg-gradient-to-b from-green-50 to-white"
>

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Overview */}
          <div>
            <h2 className="text-3xl text-gray-700 font-bold mb-3">Overview</h2>
            <p className="text-gray-600">
              {safariPackage.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl  text-gray-700 font-bold mb-3">Highlights</h2>
            <ul className="space-y-2">
              {safariPackage.details.map((item, i) => (
                <li key={i} className="bg-gray-500 p-3 rounded">
                  {item}
                </li>
              ))}
            </ul>
          </div>

         <div className="grid md:grid-cols-2 gap-8">

  <div className="grid md:grid-cols-4 w-7xl gap-8">

  {[ 
    { title: "✔ Includes", data: safariPackage.includes, color: "text-green-700" },
    { title: "✖ Not Included", data: safariPackage.excludes, color: "text-red-600" },
    { title: "Safari Schedule", data: safariPackage.schedule, color: "text-gray-700" },
    { title: "Important Notes", data: safariPackage.notes, color: "text-gray-700" },
  ].map((section, index) => (
    <div key={index} className="bg-gray-50 p-5 rounded-xl shadow-sm">
      <h2 className={`text-xl font-bold mb-3 ${section.color}`}>
        {section.title}
      </h2>
      <ul className="space-y-1 text-gray-700">
        {section.data.map((item: string, i: number) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  ))}

</div>
</div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-gray-50 p-8 rounded-3xl shadow-lg h-fit">

          <h3 className="text-2xl  text-green-700 font-bold mb-4">
            Book This Safari
          </h3>

          <p className="text-gray-600 mb-4">
            Contact us directly to reserve your safari.
          </p>

          <a
            href="https://wa.me/94771234597"
            target="_blank"
            className="block bg-green-600 hover:bg-green-700 text-white text-center py-4 rounded-xl font-semibold"
          >
            Book via WhatsApp
          </a>

          <Link
            href="/safari-packages"
            className="block mt-4 text-center text-green-600 underline"
          >
            ← Back to Packages
          </Link>

        </div>

      </motion.section>
    </main>
  );
}