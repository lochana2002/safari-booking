"use client";
import Link from "next/link";
import Image from "next/image";
import ActivitySection from "@/components/ActivitySection";
import { useState } from "react";
import { motion } from "framer-motion";
import { homestayRooms } from "@/lib/homestayRooms";

export default function HomeStayPage() {

const rooms = Object.entries(homestayRooms);

  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  adults: "",
  kids: "",
  country: "",
  room: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const [success, setSuccess] = useState(false);
const [error, setError] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError("");
  setSuccess(false);

  // ✅ Frontend validation
  if (!form.name || !form.email || !form.phone) {
    setError("Please fill all required fields");
    return;
  }

  setLoading(true);
  setLoading(true);

  try {
    const res = await fetch("http://localhost:4000/room-bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  name: form.name,
  email: form.email,
  phone: form.phone,
  adults: Number(form.adults),
  kids: Number(form.kids),
  country: form.country,
  roomType: form.room, 
  message: form.message,
}),
    });

    if (res.ok) {
     setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        adults: "",
        kids: "",
        country: "",
        room: "",
        message: "",
      });
    } else {
      setError("Failed to submit booking");
    }
  } catch (err) {
    console.error(err);
    setError("Server error. Please try again.");
  }

  setLoading(false);
};
  
  const whatsappNumber = "94770443323";

  const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  return (
    <main className="bg-white">

         {/* ================= HERO BANNER ================= */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/623605945.jpg?k=7f654e381189e7f21818f6cb6eb9c2c3ae00fc7e7398319763181efde6896776&o=')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Content */}
  <div className="relative text-center px-6 animate-heroFade">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
      Siri Home Stay
    </h1>

    <p className="py-5 text-lg md:text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
      Peaceful nature stay near Udawalawe National Park — perfect for safari lovers
    </p>

    {/* BOOK NOW BUTTON */}
    <a
      href="#booking-form"
       className="px-8 py-3 bg-green-900 hover:bg-green-700
                 text-white font-semibold rounded-full shadow-lg transition"
    >
      Book Now
    </a>
  </div>

  {/* Animations */}
  <style>
    {`
      .animate-heroFade {
        animation: heroFade 1.2s ease-out forwards;
      }

      .animate-btnFade {
        opacity: 0;
        animation: btnFade 1.2s ease-out forwards;
        animation-delay: 0.6s;
      }

      @keyframes heroFade {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes btnFade {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</section>
      
      {/* ================= THINGS TO DO ================= */}
 <motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="relative max-w-7xl mx-auto text-center space-y-3 px-6 py-20"
>

  <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
    Things to Do Around Our Homestay
  </h2>

  <ActivitySection
    title="Cooking Traditional Sri Lankan Meals"
    description="Join our hosts in the homestay kitchen and discover the secrets of authentic Sri Lankan cuisine. You’ll learn to prepare traditional dishes from scratch, using fresh, locally sourced ingredients such as coconut, spices, and seasonal vegetables. Experience hands-on cooking, from grinding spices in a mortar and pestle to rolling out dough for roti or preparing a fragrant curry. After cooking, enjoy a delicious meal together, savoring the flavors of Sri Lanka while hearing stories about local culinary traditions and village life. This activity is perfect for food lovers, families, and anyone who wants an immersive cultural experience."
    image="https://udawalaweneiljeepsafari.com/wp-content/uploads/2024/02/udawalawe_neel_jeep_safari_village-tour.jpg"
    link="/activities/cooking"
  />

  <ActivitySection
    title="Walk Through Paddy Fields"
    description="Take a peaceful stroll through the vibrant green paddy fields surrounding our homestay, where the rhythm of rural life unfolds before your eyes. Observe local farmers planting, tending, and harvesting rice using traditional methods passed down through generations. Learn about the irrigation systems, seasonal cycles, and sustainable farming practices that keep these fields thriving. As you wander along the narrow paths, you’ll hear the gentle rustle of rice stalks, the songs of native birds, and the distant sounds of village life. This walk offers opportunities to interact with friendly locals, take stunning photographs, and fully immerse yourself in the tranquility of the Sri Lankan countryside. Perfect for nature lovers, families, and anyone seeking a serene escape from the bustle of city life."
    image="https://img.freepik.com/premium-photo/beautiful-female-farmer-walking-through-rice-fields-afternoon_634190-1779.jpg" reverse
  />

  <ActivitySection
    title="Village Life Experience"
    description="Immerse yourself in the authentic rhythm of Sri Lankan village life. Spend time with local villagers as they go about their daily routines—cooking, crafting, and caring for their farms. Participate in hands-on activities such as feeding farm animals, helping with simple chores, or learning traditional crafts like weaving or pottery. Hear fascinating stories about local customs, festivals, and traditions that have been passed down for generations. This experience allows you to connect with the community, gain a deeper understanding of rural life, and appreciate the simplicity, warmth, and hospitality of village living. Perfect for families, cultural enthusiasts, and travelers seeking a genuine local experience."
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaPUky2p-b-2TVOVEHmqqVQoSBeIj_GbtVQ&s" />

  <ActivitySection
    title="Photography & Sunset Views"
    description="Experience the magic of the countryside through your lens as the day unfolds. Wander through lush paddy fields, rustic village corners, and the surrounding natural landscapes to capture vivid photographs of local wildlife, traditional farming scenes, and everyday village life. As the sun begins to set, watch the sky transform into a breathtaking canvas of warm hues—gold, pink, and purple—reflecting over the fields and creating picture-perfect moments. Whether you’re an avid photographer or simply enjoy scenic views, this activity offers a serene and inspiring way to connect with nature, unwind, and preserve the beauty of your homestay experience forever."
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVSBvCEr4bQ97AZBn5jrlzN0itAidh_0wSA&s"   reverse
  />
</motion.section>

{/* ================= ABOUT ================= */}
<section
  className="relative bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/623605967.jpg?k=44fbef164c0917587a80ad892f0427b4fa3b47d9f4a382ab085ff89297f57361&o=')",
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

    {/* TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-white mb-4"
    >
      About Our Homestay
    </motion.h2>

    {/* DESCRIPTION */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="text-center text-gray-200 mb-14 max-w-4xl mx-auto"
    >
      Our home stay is located just away from Udawalawe National Park.
      Wake up to bird sounds, enjoy home-cooked Sri Lankan meals, and experience
      authentic village hospitality. Surrounded by peaceful paddy fields and
      beautiful natural landscapes, ideal for families, couples, and photographers.
    </motion.p>

    {/* FEATURES GRID (SAME AS WHY CHOOSE US) */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {[
        {
          title: "Comfortable Rooms",
          desc: "Relax in cozy, well-designed rooms with peaceful surroundings.",
        },
        {
          title: "Free WiFi",
          desc: "Stay connected with high-speed internet during your stay.",
        },
        {
          title: "Air Conditioning",
          desc: "Enjoy a cool and comfortable environment anytime.",
        },
        {
          title: "Safe & Reliable",
          desc: "We ensure safety, comfort, and trusted service.",
        },
        {
          title: "Home Cooked Meals",
          desc: "Taste authentic Sri Lankan dishes prepared fresh daily.",
        },
        {
          title: "Explore Local Culture",
          desc: "Experience village life and traditional Sri Lankan hospitality.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={cardItem}
          className="border border-white/50 rounded-2xl p-8 text-white backdrop-blur-sm hover:-translate-y-2 transition"
        >
          <h3 className="text-2xl font-semibold text-center mb-2">
            {item.title}
          </h3>
          <p className="text-center text-gray-200">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

      {/* ================= ROOMS ================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative text-center space-y-3 px-6 py-20
                   bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Rooms
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {rooms.map(([slug, room]) => (
    <div key={slug} className="bg-white rounded-2xl shadow-lg overflow-hidden group">

    <div className="relative h-64">
      <Image
        src={room.images[0]}
        alt={room.name}
        fill
        className="object-cover group-hover:scale-105 transition duration-700"
      />
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800">
        {room.name}
      </h3>

      <p className="text-gray-600">👥 Max Guests: {room.guests}</p>

      <p className="text-xl font-bold text-green-700">
        Rs. {room.price.toLocaleString()} / night
      </p>

      <Link
        href={`/homestay/${slug}`}
        className="block text-center px-6 py-3 bg-green-900 hover:bg-green-700
                   text-white font-semibold rounded-full shadow-md transition"
      >
        View Room Details
      </Link>
    </div>
  </div>
))}
          </div>
        </div>
      </motion.section>

     <section
  id="booking-form"
  className="relative min-h-screen flex items-center justify-center text-white"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage:
        "url('https://5.imimg.com/data5/ANDROID/Default/2021/1/VL/CD/YX/8880463/product-jpeg-500x500.jpg')",
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  <div className="relative z-20 max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT CONTENT */}
    <div className="animate-heroFade">
      <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
        Reservation
      </p>

      <h1 className="font-serif text-5xl lg:text-6xl mb-6">
        Book Your Room Now...
      </h1>

      <div className="w-32 h-px bg-white mb-6" />

      <p className="max-w-md text-gray-200 leading-relaxed">
        Reserve your Room early for a quality service. Fill out this form precisely.
      </p>
    </div>

    {/* FORM */}
    <form
      onSubmit={handleSubmit}
      className="animate-heroFade delay-1 backdrop-blur-xl bg-white/10 rounded-2xl p-8 grid grid-cols-2 gap-4"
    >
      <input name="name" value={form.name} onChange={handleChange} placeholder="NAME" className="col-span-2 input" />

      <input name="email" value={form.email} onChange={handleChange} placeholder="EMAIL ADDRESS" className="col-span-2 input" />

      <input name="phone" value={form.phone} onChange={handleChange} placeholder="PHONE NUMBER" className="col-span-2 input" />

      <input name="adults" type="number" value={form.adults} onChange={handleChange} placeholder="NO OF ADULTS" className="input" />

      <input name="kids" type="number" value={form.kids} onChange={handleChange} placeholder="NO OF KIDS" className="input" />

      <input name="country" value={form.country} onChange={handleChange} placeholder="COUNTRY" className="input" />

      <input name="room" value={form.room} onChange={handleChange} placeholder="ROOM" className="input" />

      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="MESSAGE" className="col-span-2 input resize-none" />

      {success && (
        <p className="text-green-400 col-span-2">
          ✅ Booking submitted successfully!
        </p>
      )}

      {error && (
        <p className="text-red-400 col-span-2">
          ❌ {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="col-span-2 mt-4 border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  </div>

  {/* ANIMATION STYLE */}
  <style>
    {`
      .animate-heroFade {
        opacity: 0;
        animation: heroFade 1.2s ease-out forwards;
      }

      .delay-1 {
        animation-delay: 0.3s;
      }

      @keyframes heroFade {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</section>
    
      {/* ================= SAFARI COMBO ================= */}
         <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative text-center space-y-3 px-6 py-20
             bg-gradient-to-b from-green-50 to-white"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Safari + Stay Packages
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Book your stay with us and enjoy exclusive Udawalawe safari packages
          with experienced drivers and well-maintained jeeps.
        </p>

        <a
          href="/safari-packages"
          className="inline-block px-8 py-3 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition"
        >
          View Safari Packages
        </a>
      </motion.section>

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
