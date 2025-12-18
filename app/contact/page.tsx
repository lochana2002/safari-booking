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
    </main>
  );
}


