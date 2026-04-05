"use client";

import { motion } from "framer-motion";

export default function FadeInSection({ children }: any) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 py-20 space-y-10"
    >
      {children}
    </motion.section>
  );
}