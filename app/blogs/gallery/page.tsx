"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const photos = [
    "/1.jpg",
    "/21.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/111.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
    "/16.jpg"
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* ---------------- Keyboard Support ---------------- */
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % photos.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      activeIndex === 0 ? photos.length - 1 : activeIndex - 1
    );
  };

  return (
    <main className="bg-white min-h-screen">

       {/* ================= HERO BANNER ================= */}
      <section
        className="relative h-[60vh] w-full flex items-center justify-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.tacdn.com/media/attractions-splice-spp-360x240/09/93/ac/b8.jpg')", 
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative text-center px-6 animate-heroFade">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Discover who we are and why thousands trust us for their Udawalawe safari experience.
          </p>
        </div>

        {/* Hero Animation */}
        <style>
          {`
            .animate-heroFade {
              animation: heroFade 1.2s ease-out forwards;
            }
            @keyframes heroFade {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>


      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* PHOTO GALLERY */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Photo Gallery
            </h2>
            <p className="text-gray-600 mt-2">
              Captured moments from Udawalawe Safari
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="relative group rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt="Safari"
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover 
                             group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* ---------------- LIGHTBOX ---------------- */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6">

          {/* CLOSE */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={36} />
          </button>

          {/* PREV */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={48} />
          </button>

          {/* IMAGE */}
          <Image
            src={photos[activeIndex]}
            alt="Preview"
            width={1600}
            height={1000}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />

          {/* NEXT */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:scale-110 transition"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </main>
  );
}
