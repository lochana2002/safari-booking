import Link from "next/link";

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  slug: string;
  duration?: string;
  badge?: string;
}

export default function PackageCard({
  title,
  description,
  price,
  image,
  slug,
  duration,
  badge,
}: PackageCardProps) {
  return (
    <Link href={`/safari-packages/${slug}`} className="block group">
      <div
        className="relative bg-white rounded-2xl shadow-md overflow-hidden
                   group-hover:shadow-2xl transition duration-300"
      >
        {/* BADGE */}
        {badge && (
          <span className="absolute top-4 left-4 bg-green-600 text-white
                           text-xs font-semibold px-3 py-1 rounded-full z-10">
            {badge}
          </span>
        )}

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover
                       group-hover:scale-105 transition duration-500"
          />

          <div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/40
                       flex items-center justify-center transition"
          >
            <span
              className="opacity-0 group-hover:opacity-100
                         text-white font-semibold text-lg"
            >
              View Safari →
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-3">
          <h3
            className="text-xl font-bold text-gray-800
                       group-hover:text-green-700 transition"
          >
            {title}
          </h3>

          {duration && (
            <p className="text-sm text-gray-500">⏱ {duration}</p>
          )}

          <p className="text-gray-600">{description}</p>

          <div className="flex items-center justify-between pt-4">
            <p className="font-semibold text-green-700 text-lg">
              {price}
            </p>
            <span
              className="text-sm font-medium text-green-600
                         group-hover:underline"
            >
              Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
