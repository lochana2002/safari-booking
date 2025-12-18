import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        
        {/* ALLOW FULL-WIDTH HERO */}
        <div className="w-full">
          {children}
        </div>

  {/* Global WhatsApp Popup */}
        <WhatsAppChat />

        <Footer />
      </body>
    </html>
  );
}
