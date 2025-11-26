"use client";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

export default function Register1Page() {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name, photoURL: photoURL });

      await Swal.fire({
        title: "Registered Successfully!",
        text: `Welcome, ${name}`,
        icon: "success",
        confirmButtonText: "Go to Home",
      });

      router.push("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      await Swal.fire({
        title: "Logged in Successfully!",
        text: `Welcome, ${user.displayName || "User"}`,
        icon: "success",
        confirmButtonText: "Go to Home",
      });

      router.push("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center mb-6
               bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="font-medium block mb-1 text-purple-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         text-purple-600 placeholder-purple-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="font-medium block mb-1 text-purple-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         text-purple-600 placeholder-purple-400"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className="font-medium block mb-1 text-purple-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         text-purple-600 placeholder-purple-400"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="font-medium block mb-1 text-purple-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         text-purple-600 placeholder-purple-400"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 sm:py-2.5 rounded-lg shadow-md
                       hover:from-pink-600 hover:to-purple-600 transition-all duration-300
                       after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-white after:opacity-10 after:transform after:rotate-12 after:transition-all after:duration-500 hover:after:left-[100%]"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full relative overflow-hidden mt-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 sm:py-2.5 rounded-lg shadow-md
             hover:from-pink-600 hover:to-purple-600 transition-all duration-300
             after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-white after:opacity-10 after:transform after:rotate-12 after:transition-all after:duration-500 hover:after:left-[100%]"
        >
          Sign in with Google
        </button>

        <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
