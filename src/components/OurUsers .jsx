"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "This platform helped me import products easily. Very smooth experience!",
    image: "https://i.ibb.co/TML7fSr6/photo-1522075782449-e45a34f1ddfb.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Amazing UI and real-time updates. Highly recommended!",
    image: "https://i.ibb.co/93bXFqSn/medium-shot-man-with-paperwork.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    feedback: "Easy to use, very responsive, and secure platform.",
    image: "https://i.ibb.co/84fTC3xX/unnamed.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 max-w-6xl mx-auto mb-5 rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What Our Users Say
          </span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <p className="mb-4 text-gray-700 italic">"{testi.feedback}"</p>

              <div className="flex items-center mt-4">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <h3 className="font-semibold text-black">{testi.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
