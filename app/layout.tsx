import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import ChatWidget from "@/components/ChatWidget";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        
        {/* ALLOW FULL-WIDTH HERO */}
        <div className="w-full">
          {children}
        </div>
  <ChatWidget /> 
  {/* Global WhatsApp Popup */}
        <WhatsAppChat />

        <Footer />
      </body>
    </html>
  );
}
