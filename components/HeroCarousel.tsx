"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/34/fa/af.jpg",
    text: "Welcome to Udawalawe Safari",
    tagline: "An unforgettable journey into Sri Lanka’s wild heart",
  },
  {
    src: "https://lakpura.com/cdn/shop/products/LK60400100-03-E-1280-720.jpg?v=1624589428&width=1445",
    text: "See Wild Elephants Up Close",
    tagline: "Ethical, safe, and breathtaking wildlife encounters",
  },
  {
    src: "https://cdn.getyourguide.com/img/tour/5c14bc3f50a6c8858008d206bad7303aea76f402762cab2ec3b830ceca7a0aeb.jpg/68.jpg",
    text: "Experience Sri Lankan Wildlife",
    tagline: "Nature, adventure, and serenity in one place",
  },
];

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="embla relative">
      {/* VIEWPORT */}
      <div className="embla__viewport overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative min-w-full h-[70vh] md:h-[90vh]"

            >
              <img
                src={slide.src}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Overlay Text */}
             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6 space-y-6">

  {/* TITLE */}
  <h2
    className={`text-white text-4xl md:text-5xl font-bold drop-shadow-xl
      transition-all duration-700 ease-out
      ${selected === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    `}
  >
    {slide.text}
  </h2>

  {/* TAGLINE */}
  <p
    className={`text-gray-200 text-lg md:text-xl max-w-2xl
      transition-all duration-700 delay-200 ease-out
      ${selected === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    `}
  >
    {slide.tagline}
  </p>

  {/* BUTTONS */}
  <div
    className={`flex flex-col sm:flex-row gap-4
      transition-all duration-700 delay-300 ease-out
      ${selected === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    `}
  >
    <a
      href="/safari-packages/#booking-form"
      className="px-8 py-3 bg-green-800 hover:bg-green-700
                 text-white font-semibold rounded-full shadow-lg transition"
    >
      Book Now
    </a>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white shadow-lg transition"
      >
        <ChevronLeft size={32} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white shadow-lg transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              selected === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
