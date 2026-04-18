'use client';

import { motion } from 'framer-motion';

// ================= ANIMATION VARIANTS =================
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

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

export default function About() {
  return (
    <main className="bg-white min-h-screen w-full">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.ceylontraveldream.com/images/sri-lanka-tour-packages/location/kaudulla-national-park-002.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Who We Are?
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Discover who we are and why thousands trust us for their Udawalawe safari experience.
          </p>
        </motion.div>
      </section>

      {/* ================= VISION ================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeInLeft}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Our vision is to become a trusted and leading safari and rural tourism experience provider in Sri Lanka.
            We aim to connect travelers with nature, wildlife, and authentic village life while promoting sustainable tourism practices. By offering meaningful experiences, we strive to preserve local culture, protect the environment, and create lasting memories for every visitor.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://fernandotravels.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fudawalawa-header-one.be2af54b.jpg&w=3840&q=75"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ================= MISSION ================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          variants={fadeInLeft}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://holidaylankatours.com/x/cdn/?https://storage.googleapis.com/production-sitelio-v1-0-4/724/1832724/IVSQ6ItC/b2b63758c0cc465ba041ba2f3a2a349a"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div variants={fadeInRight}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
           Our mission is to deliver high-quality safari and village experiences with professional service and genuine hospitality. 
           We are committed to supporting local communities, ensuring guest safety and comfort, and providing unforgettable journeys that showcase the natural beauty and cultural heritage of Sri Lanka.
          </p>
        </motion.div>
      </motion.section>

      {/* ================= WHY CHOOSE US ================= */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.trvl-media.com/localexpert/2275867/a665c5ed-2380-48c7-ad37-13c5757ce2e6.jpg?impolicy=resizecrop&rw=1005&rh=565')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-25">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-4"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center text-gray-200 mb-14 max-w-3xl mx-auto"
          >
            We provide high-quality safari experiences with professional staff.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              { title: 'Experienced Guides', desc: 'Our guides know the best wildlife locations and ensure a safe, enjoyable journey.' },
              { title: 'Comfortable Jeeps', desc: 'Well-maintained jeeps designed for the best wildlife viewing experience.' },
              { title: 'Safe & Reliable', desc: 'We prioritize your safety with reliable service and transparent pricing.' },
              { title: 'No Hidden Charges', desc: 'We always provide clear pricing with no hidden or unexpected fees.' },
              { title: 'Focus on Your Needs', desc: 'Tailored safari experiences designed to give you the best trip.' },
              { title: 'Trusted Service', desc: 'Years of experience serving local and foreign travelers with care.' },
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

    </main>
  );
}
