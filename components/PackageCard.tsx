import Link from "next/link";

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function PackageCard({ title, description, price, image }: PackageCardProps) {
  const slug = title.toLowerCase().replaceAll(" ", "-");

  return (
   <Link href={`/safari-packages/${slug}`} className="block group">

      <div className="bg-white rounded shadow-md overflow-hidden group-hover:shadow-xl transition">
        
        <img
          src={image}
          alt={title}
          className="h-70 w-full object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="p-5 space-y-2">
          <h3 className="text-xl text-gray-800 font-bold group-hover:text-green-700 transition">
            {title}
          </h3>

          <p className="text-gray-600">{description}</p>

          <p className="font-semibold text-green-700">{price}</p>
        </div>

      </div>
    </Link>
  );
}
