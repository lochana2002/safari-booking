import PackageCard from "@/components/PackageCard";
import Image from "next/image";

export default function SafariPackages() {
  return (
    <main className="bg-[#ffffff] min-h-screen w-full py-10 px-6">
      
      {/* ---------- SAFARI PACKAGES SECTION ---------- */}
      <section className="max-w-7xl mx-auto space-y-20">
        <h1 className="text-4xl text-gray-600 font-bold text-center">Safari Packages</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <PackageCard
            title="Three-Hour Safari"
            price="Rs. 12,000"
            description="Best viewing time for elephants and wildlife. Starts at 6:00 AM."
            image="/morning.webp"
          />

          <PackageCard
            title="Half-Day Safari"
            price="Rs. 12,000"
            description="Beautiful lighting and cooling weather. Starts at 3:00 PM."
            image="/evening.jpg"
          />

          <PackageCard
            title="Full-Day Safari"
            price="Rs. 22,000"
            description="Maximum wildlife time — includes lunch break and full guidance."
            image="/full.webp"
          />
        </div>
      </section>

      {/* ---------- ENTRANCE TICKET PRICE SECTION ---------- */}
      <section className="max-w-7xl mx-auto mt-20">
        <h2 className="text-4xl text-gray-600 font-bold text-center mb-10">
          Entrance Tickets Price
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE TEXT */}
          <div className="space-y-4">
            <h3 className="tracking-[0.4em] text-gray-600 font-semibold text-lg">
              STAY AWARE 🙂
            </h3>

            <p className="text-gray-600">
              Sri Lanka National park entrance fees have been increased for local
              and foreign tourists from the 1st of September 2022 (Gazette
              Notification No. 2292/11 Aug 2022).
            </p>

            <p className="text-gray-600">
              You have to buy tickets before you enter the national park from
              the entrance gate. These tickets are issued by Wildlife and
              conservation department. Sometimes the entrance ticket counter is
              busy. Our drivers will support buying tickets.
            </p>

            {/* ELEPHANTS IMAGE */}
            <div className="w-full">
              <Image
                src="/Elephant.png"
                alt="Elephants"
                width={600}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
          </div>

          {/* RIGHT SIDE PRICE TABLE */}
          <div className="w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-lg text-gray-600 font-semibold py-3">Category</th>
                  <th className="text-lg text-gray-600 font-semibold py-3">Peak</th>
                  <th className="text-lg text-gray-600 font-semibold py-3">Off Peak</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="font-medium py-3">Foreign Adult (12+)</td>
                  <td className="py-3">$25</td>
                  <td className="py-3">$20</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="font-medium py-3">Foreign Child (6–12)</td>
                  <td className="py-3">$15</td>
                  <td className="py-3">$10</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="font-medium py-3">SAARC Adult (12+)</td>
                  <td className="py-3">$20</td>
                  <td className="py-3">$15</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="font-medium py-3">SAARC Child (6–12)</td>
                  <td className="py-3">$10</td>
                  <td className="py-3">$8</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="font-medium py-3">Local Adult (12+)</td>
                  <td className="py-3">Rs.100</td>
                  <td className="py-3">Rs.100</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="font-medium py-3">Local Child (6–12)</td>
                  <td className="py-3">Rs.50</td>
                  <td className="py-3">Rs.50</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </main>
  );
}
