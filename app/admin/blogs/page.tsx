'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminBlogs() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  // ================= FETCH BLOGS =================
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

  // ================= CREATE BLOG =================
  const handleSubmit = async () => {
    await fetch('http://localhost:4000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, image, author }),
    });

    alert('Blog created!');

    // refresh
    const res = await fetch('http://localhost:4000/blogs');
    const data = await res.json();
    setBlogs(data);

    // reset
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
    <div className="p-10 bg-green-900 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <h1 className="py-15 text-3xl font-bold text-white">Blog Management</h1>

        <button
          onClick={() => router.push('/admin/dashboard')}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Back to Dashboard
        </button>
      </div>

      {/* ================= CREATE BLOG ================= */}
      <div className="bg-white text-gray-900 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl text-gray-900 font-bold mb-4">Create Blog</h2>

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full mb-3 p-2 border rounded"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-green-700 text-gray-900 px-4 py-2 rounded"
        >
          Add Blog
        </button>
      </div>

      {/* ================= BLOG LIST ================= */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl text-gray-900 font-bold mb-4">All Blogs</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full border text-gray-900">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Author</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="p-2 border">{blog.title}</td>
                  <td className="p-2 border">{blog.author}</td>
                  <td className="p-2 border">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}