"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("login successfully");
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    console.log(email, password);
    // await signIn("credentials",{email,password,
    //  redirect: false // prevent auto reload
    // })
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
    router.push("/products"); // only redirect if login succeeded
  } else {
    console.log(res);
    alert("Authentication Failed: " + (res?.error || "Unknown error"));
  }
    //console.log(res);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Form Section */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Sign In
          </h2>

          <label className="form-control w-full">
            <span className="label-text font-bold mb-2">Email</span>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full mt-2 mb-4"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-bold mb-2">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input mt-2 mb-4 input-bordered w-full "
              required
            />
          </label>

          <button
            type="submit"
            className="w-full h-12 bg-lime-500 text-white font-bold rounded hover:bg-lime-600 transition"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-lime-500 font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Footer */}
    </div>
  );
}
