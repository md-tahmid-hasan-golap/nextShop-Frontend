"use client";

import { Typewriter } from "react-simple-typewriter";

export default function aboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Intro / Hero */}
      <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold text-amber-500 mb-3">
        <Typewriter
          words={["Hi 👋, I'm Md Tahmid Hasan Golap"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg text-gray-700 text-center mb-4">
        💻 Frontend Developer | MERN Stack Learner | Passionate Coder
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-8">
        📍 Dhaka, Bangladesh | 📧 golapraj47@gmail.com
      </p>

      {/* About Me Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 text-center mb-6 mt-12">
        About Me
      </h2>
      <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-justify mb-4">
        I am currently working on Full Stack and MERN Stack projects, steadily
        improving my skills along the way. I started with HTML, CSS, Tailwind
        CSS, and JavaScript, creating a variety of user interfaces. Gradually, I
        became proficient in React and now work with Node.js, Express.js,
        Firebase, and MongoDB. I am also learning TypeScript and Next.js to
        build more professional and scalable applications.
      </p>
      <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-justify mb-8">
        I love designing beautiful UIs and developing web applications that
        solve real-world problems. If you have any questions related to React,
        Firebase, MongoDB, or API Integration, feel free to ask me — I always
        enjoy helping others.
      </p>

      {/* Languages & Frameworks Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 text-center mb-6 mt-12">
        🧠 Languages & Frameworks
      </h2>
      <p className="text-gray-700 text-base sm:text-lg md:text-lg text-center mb-12">
        HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express.js,
        MongoDB, Firebase, Next.js
      </p>

      {/* Deployment & Tools Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 text-center mb-8">
          ⚙️ Deployment & Tools
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 font-semibold text-lg">Firebase</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 font-semibold text-lg">Vercel</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 font-semibold text-lg">Netlify</p>
          </div>
        </div>
      </section>
    </div>
  );
}
