"use client";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Electronics",
    excerpt: "Tips and tricks to find the perfect gadgets for your needs.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Top Fashion Trends 2025",
    excerpt: "Stay updated with the latest clothing styles and trends.",
    image: "https://i.ibb.co.com/fVxCnj59/photo-1575320854760-bfffc3550640.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Latest Blogs
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
