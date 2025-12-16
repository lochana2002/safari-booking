"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false); // mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path: string) =>
    `transition font-medium ${
      pathname === path
        ? "text-yellow-300"
        : "text-white hover:text-yellow-300"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-950 shadow-md"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Siri (1).png"
            alt="Siri Safari Logo"
            width={55}
            height={55}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-white">Siri Safari</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-base items-center">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/safari-packages" className={linkClass("/safari-packages")}>
            Safari Packages
          </Link>

          {/* BLOGS DROPDOWN */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 ${
                pathname.startsWith("/blogs")
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Blogs <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-2 w-40 rounded-xl bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link
                href="/blogs"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-t-xl"
              >
                Blogs
              </Link>
              <Link
                href="/blogs/gallery"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-b-xl"
              >
                Gallery
              </Link>
            </div>
          </div>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-green-900 text-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-6 text-base">
          <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          <Link
            href="/safari-packages"
            className={linkClass("/safari-packages")}
            onClick={() => setIsOpen(false)}
          >
            Safari Packages
          </Link>

          {/* MOBILE BLOGS DROPDOWN */}
          <button
            onClick={() => setBlogOpen(!blogOpen)}
            className="flex items-center justify-between text-white"
          >
            Blogs <ChevronDown size={18} />
          </button>

          {blogOpen && (
            <div className="ml-4 flex flex-col gap-2">
              <Link
                href="/blogs"
                className={linkClass("/blogs")}
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/gallery"
                className={linkClass("/gallery")}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </div>
          )}

          <Link
            href="/contact"
            className={linkClass("/contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
