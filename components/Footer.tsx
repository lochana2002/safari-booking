import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-1000 text-gray-300 pt-16 pb-8 mt-20">
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
            <li><a href="/safari-packages" className="hover:text-white transition">Safari Packages</a></li>
            <li><a href="/#bungalows" className="hover:text-white transition">Bungalows</a></li>
            <li><a href="/homestay" className="hover:text-white transition">Homestay</a></li>
            <li><a href="/#hotels" className="hover:text-white transition">Hotels</a></li>
            <li><a href="/#other" className="hover:text-white transition">Other Places</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/blogs/gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/safari-packages/#faq" className="hover:text-white transition">FAQ</a></li>
          </ul>

          {/* --- SOCIAL MEDIA ICONS --- */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAaVBMVEUYd/L///8aefIAbvGMsPeOtPh1pfbt9P47gPMQc/HC1vsAcfIAaPEAa/H7/f8SdfL0+P6UuPjk7f20zfqBqfZPj/RkmvWErfZsnvVXk/U7hfNMi/PO3/xklvUAZfG70Prb6Pyqw/mevvhy9p2RAAAC+0lEQVR4nO3aXXOiMBSA4YbIRwgSBBa1UkH//49cWWVGuxybnB6Tdua8F7s3DPNMIBBi395+Q1FogF3MpIyZlDGTMmZSxkzKmEkZMyljJmXMpIyZlDGTMmZSxkzKmEmZB6bRWsupy/8KeY7XMpVcF+vsT9duV/Fq2+72mS4KibC+jqm0Uu9tM6ZVVV4S0z9lVdX5Zm+U67C+iqn1oW1SsVzZxx+RNMGZ8pgMNWC8VvUrJcMytdrV5VPkVZrogEylu/Fr41Rnf4OSM3XUWIzk1JjZn5WaqQ+VHVKIU7h7U8aWQ3m5Nff2tyYx83iyVorRYTBpmfJsjRQiDsXUGwelcHoPETJlZ3/FhejXYZgqs57jU0mg0TS5i7I+uLzS6Zg6cbnkYnB4GlEyDbQcWqxMXOY5HXMduyhFGmi9qb4YzDRvTudT098Oa4ogTPlsMKuxjaYPoSlpkiEtxSHMaEY9rMy74m6lbvTxLc7dJhAVU+3BZ2a5MZ9MkXH6viBkwq/Jarf0tgnElOA1TxznChAJ0yhI2bg9HsFImHoPKMd37DbHp0iYa2ideXZaBj2JhHkEbs0yIhpMEqYpgFdQfyQ4+79ImBHA3BJNIBqmgj56XV+JcBRM3S0zK7o1NwkTWBGPP4sp22VmT3DuWyTM7TIzd351g5EwV8y89krm8DuYPJqYwNEkOPctHPP6q9lcATyQBrmc6/camvmR3LcDdtv7ZLmduxPFNE8+dy06uS+WUUzltPn2X5n71ArA7H39tPo9ZutrCn2LWWMWy/6ZOebLwz+zQ1xz/8wUtVvjnYnbYfDOzFBfm76ZuUEtm3wzV5gJ5J1ZI7foPDMH5HaNZybqoemdWWG36HDMpkrvg37GeDzqchx6Wxa3es8eijbAr6qb6PFAhz+VIWE+Bn2yiZhqT/vFzB+1DcvMOWYyExUz55jJTFTMnGMmM1Exc46ZzETFzDlmMhMVM+eYyUxUzJxjJjNRMXOOmcxExcw5ZjITFTPnmMlMVMycYyYp8y+AwC3CGUFuswAAAABJRU5ErkJggg==" alt="Facebook" width={28} height={28} />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Image src="data:image/jpeg;base64,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" alt="whatsapp" width={28} height={28} />
            </a>
          </div>
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
