import { useState } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function AnimalSection({
  title,
  description,
  image,
  reverse,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const limit = 160;
  const isLong = description.length > limit;

  return (
    <div
      className={`grid md:grid-cols-2 gap-16 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

       <p className="text-gray-600 text-justify leading-relaxed">
          {expanded || !isLong
            ? description
            : description.slice(0, limit) + "..."}
        </p>

        {/* Read More Button */}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-500 font-semibold hover:underline"
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
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