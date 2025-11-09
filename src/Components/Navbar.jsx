import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../public/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("You logged out successfully 🎉"))
      .catch((error) => toast.error(error.message));
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <li className="font-semibold text-gray-600">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-gray-600">
        <NavLink to="/explore">Explotr Artworks</NavLink>
      </li>

      {user && (
        <>
          <li className="font-semibold text-gray-600">
            <NavLink to="/add-artwork">Add Artwork</NavLink>
          </li>
          <li className="font-semibold text-gray-600">
            <NavLink to="/my-gallery">My Gallery</NavLink>
          </li>
          <li className="font-semibold text-gray-600">
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </>
      )}

      {/* {
            user && <>
                
            </>
        } */}
    </>
  );

  return (
    <div className="sticky top-0 z-50 border-b border-gray-300 bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <Link to={"/"}>
              <div className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] rounded-xl">
                <img
                  src={logo}
                  alt="Artora Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </Link>

            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-transparent bg-clip-text"
            >
              ARTORA
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="relative group flex items-center">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-10 h-10 rounded-full border-2 border-[#79D7D0] cursor-pointer object-cover"
                />

                <div className="absolute top-12 right-0 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  {user.displayName || "User"}
                  <button
                    onClick={handleLogOut}
                    className="block mt-2 w-full text-center bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] px-3 py-1 rounded-md text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className=" mr-2 text-blue-600 underline hover:bg-[#79D7D0] hover:py-1 hover:px-3 hover:mr-0 hover:rounded-xl hover:text-white hover:no-underline"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn  font-medium rounded-xl text-white bg-gradient-to-r from-[#FF8C88] to-[#79D7D0]"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Navbar;
