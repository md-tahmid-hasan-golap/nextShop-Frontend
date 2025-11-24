"use client";

const stats = [
  { id: 1, title: "Products", value: "1000+" },
  { id: 2, title: "Happy Customers", value: "500+" },
  { id: 3, title: "Brands", value: "50+" },
  { id: 4, title: "Support", value: "24/7" },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-10">
          Our Achievements
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-amber-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
