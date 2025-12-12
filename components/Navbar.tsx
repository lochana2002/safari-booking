"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-green-900 shadow-lg" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Siri.png"
            alt="Siri Safari Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-white">Siri Safari</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-white text-lg">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-300">About Us</Link>
          <Link href="/safari-packages" className="hover:text-yellow-300">Safari Packages</Link>
          <Link href="/blogs" className="hover:text-yellow-300">Blogs</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact Us</Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
         
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-green-900 text-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/safari-packages" onClick={() => setIsOpen(false)}>Safari Packages</Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
