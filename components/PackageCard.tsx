import Link from "next/link";

export default function PackageCard({
  title,
  description,
  price,
  image,
  slug,
}: any) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg">

      {/* Card Image */}
       <img
    src={image}
    className="h-60 w-full object-cover transition-transform duration-700 hover:scale-110"
  />

      {/* Content */}
      <div className="p-4 text-center space-y-2">
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <p className="text-green-700 font-semibold">{price}</p>

       <Link
  href={`/safari-packages/${slug}`}
  className="mt-4 flex justify-center"
>
  <span
    className="px-6 py-3 bg-green-900 hover:bg-green-700
               text-white font-semibold rounded-full shadow-md transition"
  >
    View Package 
  </span>
</Link>
      </div>

    </div>
  );
}