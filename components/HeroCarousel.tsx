"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/34/fa/af.jpg", text: "Welcome to Udawalawe Safari" },
  { src: "https://lakpura.com/cdn/shop/products/LK60400100-03-E-1280-720.jpg?v=1624589428&width=1445", text: "See Wild Elephants Up Close" },
  { src: "https://cdn.getyourguide.com/img/tour/5c14bc3f50a6c8858008d206bad7303aea76f402762cab2ec3b830ceca7a0aeb.jpg/68.jpg", text: "Experience Sri Lankan Wildlife" },
];

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
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
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl text-center px-4">
                  {slide.text}
                </h2>
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
