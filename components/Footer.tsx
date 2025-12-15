import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">

      {/* MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* --- LOGO + DESCRIPTION --- */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/Siri (1).png" 
              width={60}
              height={60}
              alt="Udawalawe Safari Logo"
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold text-white">Siri Safari</h2>
          </div>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Join us for an unforgettable wildlife adventure in Udawalawe.
            Our expert guides help you explore elephants, birds, crocodiles,
            lakes, and the stunning landscapes of this iconic national park.
          </p>
        </div>

       {/* --- QUICK LINKS --- */}
<div>
  <h3 className="text-xl font-semibold text-white mb-4">
    Quick Links
  </h3>

 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
    <li><a href="/" className="hover:text-white transition">Home</a></li>
    <li><a href="/safari-packages" className="hover:text-white transition">Safari Packages</a></li>
    <li><a href="/#bungalows" className="hover:text-white transition">Bungalows</a></li>
    <li><a href="/#hotels" className="hover:text-white transition">Hotels</a></li>
    <li><a href="/#other" className="hover:text-white transition">Other Places</a></li>
    <li><a href="/about" className="hover:text-white transition">About Us</a></li>
    <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
    <li><a href="/blogs/gallery" className="hover:text-white transition">Gallery</a></li>
    <li><a href="/#faq" className="hover:text-white transition">FAQ</a></li>
  </ul>
</div>


        {/* --- MAP SECTION --- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Find Us</h3>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.170317883803!2d80.8889!3d6.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4fdd4b4fa7df3%3A0x294d9af89c7479a3!2sUdawalawe%20National%20Park!5e0!3m2!1sen!2slk!4v1706500000000"
              width="100%"
              height="230"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="mt-3 text-gray-400 text-sm">
            Udawalawe National Park, Sri Lanka
          </p>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Udawalawe Safari Booking. All rights reserved.
      </div>
    </footer>
  );
}
