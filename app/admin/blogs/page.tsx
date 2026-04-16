'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminBlogs() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  // ================= FETCH =================
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/admin/login');
      return;
    }

    fetch('http://localhost:4000/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .finally(() => setLoading(false));
  }, [router]);

  // ================= CREATE =================
  const handleSubmit = async () => {
    await fetch('http://localhost:4000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, image, author }),
    });

    const res = await fetch('http://localhost:4000/blogs');
    setBlogs(await res.json());

    setTitle('');
    setContent('');
    setImage('');
    setAuthor('');
  };

  // ================= DELETE =================
  const handleDelete = async (id: number) => {
    if (!confirm('Delete this blog?')) return;

    await fetch(`http://localhost:4000/blogs/${id}`, {
      method: 'DELETE',
    });

    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="py-22 px-10 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 bg-white p-5 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-gray-800">
          Blog Management
        </h1>

        <button
          onClick={() => router.push('/admin/dashboard')}
          className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>

      {/* CREATE BLOG CARD */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Create New Blog</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="p-3 border rounded-lg"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="p-3 border rounded-lg"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            className="p-3 border rounded-lg md:col-span-2"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <textarea
            className="p-3 border rounded-lg md:col-span-2"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          Add Blog
        </button>
      </div>

      {/* BLOG LIST */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 border text-left">Title</th>
                  <th className="p-3 border text-left">Author</th>
                  <th className="p-3 border text-left">Date</th>
                  <th className="p-3 border text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="p-3 border">{blog.title}</td>
                    <td className="p-3 border">{blog.author}</td>
                    <td className="p-3 border">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-3 border">
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}