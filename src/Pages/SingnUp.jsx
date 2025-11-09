import React, { use, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../../public/logo.png";
import { Link, useNavigate } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { createUser, setUser, updateUser, signInWithGoogle } =
    use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful ✅");
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handelSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else setNameError("");

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Signup successful 🎉");

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            navigate("/");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="py-20 flex items-center justify-center bg-[#FCF9F5] px-4">
      <div
        data-aos="zoom-in-down"
        className="bg-white rounded-xl shadow-md w-full max-w-sm lg:max-w-lg md:max-w-md px-6 py-10"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl font-bold">
            <img className="p-1" src={logo} alt="" />
          </div>
        </div>
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            <span className="text-[#D29E92]">Welcome to </span>
            <span className="text-[#6FB7AF]">Artify</span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Join our creative community
          </p>
        </div>

        <form onSubmit={handelSignup} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-[#f9f6f3] focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
            {nameError && <p className="text-sm text-red-500">{nameError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-[#f9f6f3] focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-[#f9f6f3] focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-[#f9f6f3] focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
            <span
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-[#ed6d5c] text-white font-medium hover:bg-[#e55b47]"
          >
            Sign Up
          </button>

          <button
          onClick={handleGoogleSignUp}
          className="w-full py-3 cursor-pointer rounded-lg border border-gray-300 bg-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] hover:text-white hover:font-semibold transition">
            <FcGoogle />
            Sign up with Google
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            Already have an account?
            <Link
              to="/login"
              className="text-purple-600 ml-1 font-medium cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
