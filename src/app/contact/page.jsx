"use client";

import Marquee from "react-fast-marquee";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Contact Us
        </span>
      </h1>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <a
          href="https://www.facebook.com/g.lap.raj"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300 rounded-full p-2 hover:bg-blue-100"
        >
          <FaFacebook size={36} />
        </a>

        <a
          href="https://www.linkedin.com/in/tahmid-hasan-golap/?locale=en_US"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300 rounded-full p-2 hover:bg-blue-100"
        >
          <FaLinkedinIn size={36} />
        </a>

        <a
          href="https://github.com/md-tahmid-hasan-golap"
          className="text-gray-800 hover:text-gray-900 transition-colors duration-300 rounded-full p-2 hover:bg-gray-200"
        >
          <FaGithub size={36} />
        </a>

        <a href="" className="text-green-500">
          <FaWhatsappSquare size={36} />
        </a>
      </div>

      {/* Marquee Section */}
      <div className="p-4 rounded-lg max-w-5xl mx-auto mb-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <Marquee
          speed={60}
          pauseOnHover={true}
          gradient={false}
          className="text-center flex items-center gap-5 font-bold text-white"
        >
          <p>
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
          <p>
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
          <p>
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
        </Marquee>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-5">
        <form className="flex flex-col gap-4">
          <div>
            <label
              className="block mb-1 font-medium text-black bg-clip-text "
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label
              className="block mb-1 font-medium text-black bg-clip-text "
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label
              className="block mb-1 font-medium text-black bg-clip-text "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
