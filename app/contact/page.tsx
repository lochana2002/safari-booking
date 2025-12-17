export default function Contact() {
  return (
    <main className="bg-white min-h-screen w-full">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSD9RD_AIJeI81XnTQzAeGXAQZLY2OM4_QA&s')" }}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center px-6 max-w-3xl animate-heroFade">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            Contact Siri Safari
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-6">
            Plan your Udawalawe safari with confidence & local expertise.
          </p>
           {/* CONTACT DETAILS */}
        <div className="space-y-3 text-center">
          <p><strong>Phone:</strong> +94 77 123 4567</p>
          <p><strong>Email:</strong> udawalawe.safari@gmail.com</p>
          <p><strong>Location:</strong> Udawalawe, Sri Lanka</p>
        </div>
        </div>
      </section>

    {/* ================= MAIN CONTENT ================= */}
<section className="relative -mt-16 z-10">
  <div className="max-w-6xl mx-auto px-6">

    <div
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12
                 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >

      {/* LEFT SIDE – INFO */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get in Touch
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Have a question or want to book a safari?  
          Fill out the form and our local safari experts will contact you shortly.
        </p>

        <ul className="space-y-3 text-gray-700 text-sm">
          <li>✔ Safari bookings & custom tours</li>
          <li>✔ Bungalow & hotel inquiries</li>
          <li>✔ Fast response via WhatsApp or email</li>
        </ul>

        <p className="text-sm text-gray-500">
          ⏱ We usually respond within <span className="font-medium">30 minutes</span>
        </p>
      </div>

      {/* RIGHT SIDE – FORM */}
      <form className="space-y-5">

        {/* NAME */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl
                       focus:ring-2 focus:ring-green-500 focus:border-green-500
                       outline-none transition"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl
                       focus:ring-2 focus:ring-green-500 focus:border-green-500
                       outline-none transition"
          />
        </div>

        {/* REASON */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Reason for Contact
          </label>
          <select
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl
                       bg-white text-gray-700
                       focus:ring-2 focus:ring-green-500 focus:border-green-500
                       outline-none transition"
          >
            <option value="">Select a reason</option>
            <option>Safari Booking</option>
            <option>Private / Custom Safari</option>
            <option>Bungalow Stay</option>
            <option>General Inquiry</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl
                       focus:ring-2 focus:ring-green-500 focus:border-green-500
                       outline-none transition resize-none"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl text-white text-lg font-semibold
                     bg-gradient-to-r from-green-600 to-green-700
                     hover:from-green-700 hover:to-green-800
                     shadow-lg hover:shadow-xl
                     transition transform hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>

    </div>
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

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/94770443323"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-400 hover:bg-green-600 text-white 
             w-14 h-14 rounded-full flex items-center justify-center shadow-xl 
             animate-bounce"
>
  <img src="data:image/jpeg;base64,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" alt="WhatsApp" className="w-8 h-8" />
</a>
    </main>
  );
}


