"use client";

const sectionsData = [
  {
    title: "Fast Delivery",
    description: "Get your products delivered within 24 hours.",
    image: "https://i.ibb.co.com/jkgRVYJz/photo-1738830241330-ae47f3708ad4.jpg",
  },
  {
    title: "24/7 Support",
    description: "Our team is here to help you anytime.",
    image:
      "https://i.ibb.co.com/7xhxFysd/premium-photo-1675186049222-0b5018db6ce9.jpg",
  },
  {
    title: "Secure Payments",
    description: "Pay safely with multiple payment options.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Quality Products",
    description: "We provide only top-notch products.",
    image:
      "https://i.ibb.co.com/Cs8Zd2Z7/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg",
  },
];

export default function Sections() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Why Choose Us
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectionsData.map((section, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Image instead of icon */}
            <img
              src={section.image}
              alt={section.title}
              className="w-16 h-16 mb-4 object-cover rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
