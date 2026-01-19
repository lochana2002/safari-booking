import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link?: string;
}

export default function AnimalSection({
  title,
  description,
  image,
  reverse,
  link,
}: Props) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-16 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-600 text-justify text-lg leading-relaxed">
          {description}
        </p>

        {link && (
          <Link
            href={link}
            className="inline-block px-8 py-3 bg-[#899b22] hover:bg-[#70841a] 
                       text-white font-semibold rounded-full shadow-lg transition"
          >
            View More
          </Link>
        )}
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[320px] object-cover rounded-xl shadow-xl"
        loading="lazy"
      />
    </div>
  );
}
