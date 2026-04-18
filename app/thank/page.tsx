export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.travelopro.com/public/images/contact/banner-5.png')",
        }}
      />

      {/* Dark Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-4 px-6">
        <h1 className="text-4xl font-bold opacity-90">
           Thank You For Booking!
        </h1>

        <p className="text-lg text-gray-200">
          Your room booking has been successfully submitted.
        </p>

        <p className="text-gray-300">
          We will contact you shortly with confirmation details.
        </p>

        {/* Optional button */}
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-green-800 hover:bg-green-700 rounded-full font-semibold transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}