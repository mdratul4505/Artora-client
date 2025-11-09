import React, { use, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../public/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

// import React, { use, useEffect, useRef, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { GiCursedStar } from "react-icons/gi";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../Context/AuthProvaider";
// import { toast, ToastContainer } from "react-toastify";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const { signIn, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginLoading) return;
    setLoginLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful ✅");

        navigate(location.state ? location.state : "/");
      })
      .catch((e) => {
        let friendlyMessage = "";

        switch (e.code) {
          case "auth/user-not-found":
            friendlyMessage = "No user found with this email.";
            break;
          case "auth/wrong-password":
            friendlyMessage = "Please provide the correct password.";
            break;
          case "auth/invalid-email":
            friendlyMessage = "Please enter a valid email address.";
            break;
          case "auth/too-many-requests":
            friendlyMessage = "Too many attempts. Please try again later.";
            break;
          case "auth/invalid-credential":
            friendlyMessage = "please provide current password";
            break;
          default:
            friendlyMessage = `${e.code}: ${e.message}`;
        }

        setError(friendlyMessage);
        toast.error(friendlyMessage);
      })
      .finally(() => setLoginLoading(false));
  };

  const handleGoogleLogin = () => {
    if (googleLoading) return;
    setGoogleLoading(true);

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google login successful ✅");
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setGoogleLoading(false));
  };

  const handleForgetPasswordRedirect = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="py-20 flex items-center justify-center bg-[#FCF9F5] px-4">
      <div
        data-aos="zoom-in-down"
        className="bg-white rounded-xl shadow-md w-full max-w-sm px-6 py-10"
      >
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

        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
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
            type="button"
            onClick={handleForgetPasswordRedirect}
            className="text-purple-600 text-right cursor-pointer hover:underline"
          >
            Forget Password?
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loginLoading}
            className="w-full py-2 rounded-md bg-[#ed6d5c] text-white font-medium hover:bg-[#e55b47]"
          >
            {loginLoading ? "Signing In..." : "Sign In"}
          </button>

          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-3 cursor-pointer rounded-lg border border-gray-300 bg-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] hover:text-white hover:font-semibold transition"
          >
            <FcGoogle />
            {googleLoading ? "Loading..." : "Sign In with Google"}
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
