import FadeInSection from "./FadeInSection";

type Bungalow = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type Props = {
  heading: string;
  intro: string;
  items: Bungalow[];
};

export default function BungalowSection({
  heading,
  intro,
  items,
}: Props) {
  return (
    <section className="py-1 px-6 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      
      {/* Header */}
      <FadeInSection>
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-green-700 font-semibold text-sm">
            Wildlife Accommodation
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            {heading}
          </h2>

          <div className="w-24 h-1 bg-green-600 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
            {intro}
          </p>
        </div>
      </FadeInSection>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <FadeInSection key={index}>
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[420px]">

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200 mb-5 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300"
                >
                  Explore
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}