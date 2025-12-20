export default function Contact() {
  return (
    <main className="bg-white min-h-screen w-full">

<section
  id="contact-us"
  className="relative min-h-screen flex items-center justify-center text-white"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage:
        "url('data:image/jpeg;base64,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')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  <div className="relative z-20 max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT CONTENT */}
    <div className="animate-heroFade">
      <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
        Contact Us
      </p>

      <h1 className="font-serif text-5xl lg:text-6xl mb-6">
        Get in Touch With Us
      </h1>

      <div className="w-32 h-px bg-white mb-6" />

      <p className="max-w-md text-gray-200 leading-relaxed">
        Have questions about safaris, rooms, or custom packages?  
        Send us a message and our team will respond shortly.
      </p>

      {/* CONTACT DETAILS */}
        <div className="space-y-3 ">
          <p><strong>Phone:</strong> +94 77 123 4567</p>
          <p><strong>Email:</strong> udawalawe.safari@gmail.com</p>
          <p><strong>Location:</strong> Udawalawe, Sri Lanka</p>
        </div>

      <ul className="mt-6 space-y-3 text-gray-200 text-sm">
        <li>✔ Safari & tour inquiries</li>
        <li>✔ Room & accommodation details</li>
        <li>✔ Fast response via WhatsApp or Email</li>
      </ul>
    </div>

    {/* CONTACT FORM */}
    <form className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="FULL NAME"
        className="col-span-2 input"
      />
      <input
        type="email"
        placeholder="EMAIL ADDRESS"
        className="col-span-2 input"
      />
      <input
        type="tel"
        placeholder="PHONE NUMBER"
        className="col-span-2 input"
      />

      <select className="col-span-2 input">
        <option>SELECT INQUIRY TYPE</option>
        <option>Safari Booking</option>
        <option>Room / Accommodation</option>
        <option>Custom Tour</option>
        <option>General Inquiry</option>
      </select>

      <textarea
        rows={4}
        placeholder="YOUR MESSAGE"
        className="col-span-2 input resize-none"
      />

      <button
        type="submit"
        className="col-span-2 mt-4 border border-white px-8 py-3 uppercase tracking-widest
                   hover:bg-white hover:text-black transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      {/* ================= MAP ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Find Us
        </h2>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Udawalawe%20Sri%20Lanka&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ================= HERO ANIMATION ================= */}
      <style>
        {`
          .animate-heroFade {
            animation: heroFade 1.2s ease-out forwards;
          }
          @keyframes heroFade {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </main>
  );
}


