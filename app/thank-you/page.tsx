export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
        {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage:
        "url('https://dynamic-media.tacdn.com/media/photo-o/2f/ab/a7/bb/caption.jpg?w=700&h=500&s=1')"}}
  />
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold opacity-90">Thank You!</h1>
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
