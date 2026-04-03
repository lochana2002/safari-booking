'use client';

import { useEffect, useState } from 'react';

export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
  fetch('http://localhost:4000/blogs')
    .then((res) => res.json())
    .then((data) => {
      console.log("BLOGS API:", data);

      if (Array.isArray(data)) {
        setBlogs(data);
      } else if (Array.isArray(data.data)) {
        setBlogs(data.data);
      } else if (Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      } else {
        setBlogs([]);
      }
    });
}, []);

  return (
    <main className="bg-white min-h-screen w-full">

       {/* ================= HERO BANNER ================= */}
      <section
        className="relative h-[60vh] w-full flex items-center justify-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kGc7pVnihUtgSdMrkUWzIIVC51sO4ZJ_90qAoly-Uw&s')", 
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative text-center px-6 animate-heroFade">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Blogs
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Your Ultimate Sri Lanka Safari Experience.
          </p>
        </div>

        {/* Hero Animation */}
        <style>
          {`
            .animate-heroFade {
              animation: heroFade 1.2s ease-out forwards;
            }
            @keyframes heroFade {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Latest Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="shadow-lg rounded-xl overflow-hidden">
              
              {blog.image && (
                <img
                  src={blog.image}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {blog.content}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}