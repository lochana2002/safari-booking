export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
        {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage:
        "url('https://www.theladders.com/wp-content/uploads/handshake_190617.jpg')"}}
  />
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold opacity-90">Thank You For Booking With Us!</h1>
        <p className="text-lg opacity-90">
          Your safari booking has been successfully submitted.
        </p>
        <p className="opacity-90">
          We will contact you shortly.
        </p>
      </div>
    </div>
  );
}
