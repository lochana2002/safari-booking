import Image from "next/image";
import {
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 mt-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-xl backdrop-blur">
                <Image
                  src="/Siri (1).png"
                  width={50}
                  height={50}
                  alt="logo"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                Safari Udawalawe
              </h2>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Experience premium wildlife safaris in Udawalawe with expert
              guides, luxury comfort, and unforgettable elephant encounters.
            </p>

            {/* CONTACT */}
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Udawalawe, Sri Lanka
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> +94 77 000 0000
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> info@safariudawalawe.com
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Safari Packages", "/safari-packages"],
                ["Bungalows", "/#bungalows"],
                ["Homestay", "/homestay"],
                ["Hotels", "/#hotels"],
                ["Gallery", "/blogs/gallery"],
                ["Contact", "/contact"],
                ["FAQ", "/safari-packages/#faq"],
                ["Other Places", "/#other"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-white transition hover:translate-x-1 duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIAL + MAP */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-lg">Stay Connected</h3>

            {/* SOCIAL BUTTONS */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: MessageCircle, link: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    className="p-3 rounded-xl bg-white/5 hover:bg-green-500/20 hover:scale-110 transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Udawalawe%20National%20Park&output=embed"
                width="100%"
                height="180"
                loading="lazy"
                className="hover:grayscale grayscale-0 transition"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Safari Udawalawe. All rights reserved.
          </p>

          <p className="text-gray-600 mt-2 md:mt-0">
            Crafted with ❤️ for wildlife experiences
          </p>
        </div>
      </div>
    </footer>
  );
}