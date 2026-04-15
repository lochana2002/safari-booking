'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-8xl bg-white mx-auto py-25 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {blog.title}
      </h1>

      {blog.image && (
        <img
          src={blog.image}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />
      )}

      <p className="text-gray-800 leading-relaxed text-lg">
        {blog.content}
      </p>

       <Link
            href="/blogs"
            className="block mt-4 text-center text-green-800 underline"
          >
            ← Back to Blogs
          </Link>
    </div>
  );
}