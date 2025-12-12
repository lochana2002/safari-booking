export default function Contact() {
  return (
    <main
      className="min-h-screen w-full py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/back.jpg')",
      }}
    >
     {/* TRANSPARENT OVERLAY */}
<div className="absolute inset-0 bg-white/0 backdrop-blur-md"></div>


      {/* CONTENT */}
      <div className="relative max-w-3xl mx-auto px-6 space-y-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Contact Us
        </h1>

        <p className="text-gray-700 text-center max-w-xl mx-auto">
          Have questions or want to make a special request? We’re happy to help!
        </p>

        {/* CONTACT DETAILS */}
        <div className="space-y-3 text-gray-700 text-center">
          <p><strong>Phone:</strong> +94 77 123 4567</p>
          <p><strong>Email:</strong> udawalawe.safari@gmail.com</p>
          <p><strong>Location:</strong> Udawalawe, Sri Lanka</p>
        </div>

        {/* FORM */}
        <form className="space-y-4 bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-md border">
          <input
            className="w-full text-gray-700 p-3 border rounded-lg"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="w-full text-gray-700 p-3 border rounded-lg"
            placeholder="Your Email"
            type="email"
          />
          <textarea
            className="w-full text-gray-700 p-3 border rounded-lg"
            placeholder="Your Message"
            rows={4}
          />
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
