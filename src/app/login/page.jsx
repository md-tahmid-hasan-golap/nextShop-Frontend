"use client";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter email and password",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome back, ${user.displayName || "User"}`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          router.push("/"); // Redirect to Home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Google Login Successful!",
          text: `Welcome back, ${user.displayName || "User"}`,
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          router.push("/"); // Redirect to Home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white shadow-xl p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center mb-6 
               bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="font-medium block mb-1 text-purple-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-600 placeholder-purple-400"
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
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-600 placeholder-purple-400"
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
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 sm:py-2.5 rounded-lg shadow-md
             hover:from-pink-600 hover:to-purple-600 transition-all duration-300
             after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-white after:opacity-10 after:transform after:rotate-12 after:transition-all after:duration-500 hover:after:left-[100%]"
          >
            Sign in with Google
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-500 underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
