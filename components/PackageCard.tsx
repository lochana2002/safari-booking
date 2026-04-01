import Link from "next/link";

export default function PackageCard({
  title,
  description,
  price,
  image,
  slug,
}: any) {
  return (
    <Link href={`/safari-packages/${slug}`}>
      <div className="border rounded-xl overflow-hidden hover:shadow-lg">

        <img src={image} className="h-60 w-full object-cover" />

        <div className="p-4">
          <h3 className="font-bold text-xl text-gray-800 ">{title}</h3>
          <p className="text-gray-500 ">{description}</p>
          <p className="text-green-700">{price}</p>
        </div>

      </div>
    </Link>
  );
}