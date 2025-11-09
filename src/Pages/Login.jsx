import React from "react";
import logo from "../../public/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="py-20 flex items-center justify-center bg-[#FCF9F5] px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-sm px-6 py-10">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl font-bold">
            <img className="p-1" src={logo} alt="" />
          </div>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            <span className="text-[#D29E92]">Welcome to </span>
            <span className="text-[#6FB7AF]">Artify</span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Join our creative community
          </p>
        </div>

        <form className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-[#f9f6f3] focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-[#f9f6f3] focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-[#ed6d5c] text-white font-medium hover:bg-[#e55b47]"
          >
            Login
          </button>

          <button className="w-full py-3 cursor-pointer rounded-lg border border-gray-300 bg-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] hover:text-white hover:font-semibold transition">
            <FcGoogle />
            Signin with Google
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Don't have an account?
            <Link
              to="/signup"
              className="text-purple-600 ml-1 font-medium cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
