import Link from "next/link";

export default function PackageCard({
  title,
  description,
  price,
  image,
  slug,
}: any) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden 
      bg-white shadow-md hover:shadow-2xl 
      transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          className="h-64 w-full object-cover 
          transition-transform duration-700 
          group-hover:scale-110"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

       
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 text-center">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-500 text-sm line-clamp-2">
          {description}
        </p>

        <Link href={`/safari-packages/${slug}`}>
          <span
            className="inline-block mt-3 px-6 py-2.5 
            bg-gradient-to-r from-green-900 to-green-700 
            hover:from-green-800 hover:to-green-600
            text-white font-medium rounded-full 
            shadow-md transition-all duration-300"
          >
            View Package
          </span>
        </Link>
      </div>
    </div>
  );
}