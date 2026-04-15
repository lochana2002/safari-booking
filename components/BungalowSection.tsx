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

export default function BungalowSection({ heading, intro, items }: Props) {
  return (
    <section className="py-6 space-y-6">
      {/* HEADER (compact) */}
      <FadeInSection>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          {heading}
        </h2>

        <p className="text-gray-600 text-base text-center leading-relaxed max-w-2xl mx-auto">
          {intro}
        </p>
      </FadeInSection>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <FadeInSection key={i}>
            {/* CARD */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full">

              {/* IMAGE + HOVER */}
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                />

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                             flex items-center justify-center text-white font-semibold 
                             transition duration-300"
                >
                  Show More →
                </a>
              </div>

              {/* CONTENT (compact) */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1 flex-grow leading-snug">
                  {item.description}
                </p>
              </div>

            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}