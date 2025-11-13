import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import logo from "../../public/logo.png";
import { RiTwitterXLine } from 'react-icons/ri';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=" bg-black text-white py-10 px-6 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl font-bold">
            <div>
                <img src={logo} alt="" />
            </div>
          </div>
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-transparent bg-clip-text"
            >
              ARTORA
            </Link>

          </div>
          <p className="text-sm leading-relaxed">
             A creative platform for artists to showcase and discover amazing artworks.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#FF8C88] transition">
                Home
              </a>
            </li>
            <li className="hover:text-[#FF8C88] transition">
        <Link to="/explore-artworks">Explotr Artworks</Link>
      </li>
            
            <li>
              <Link to="/login" className="hover:text-[#FF8C88] transition">
                Join as Artist
              </Link>
              </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-3 mb-3">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] flex items-center justify-center  hover:scale-110 transition"
            >
              <RiTwitterXLine />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:contact@skillswap.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaEnvelopeCircleCheck />
            </a>
          </div>
          <p className="text-sm ">📧 contact@Artora.com</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm  border-t border-gray-200 pt-4 font-semibold bg-gradient-to-l from-[#ec605b] to-[#2dd6cb]  bg-clip-text text-transparent">
        © {new Date().getFullYear()} ARTORA — All rights reserved.
      </div>
    </footer>
    );
};

export default Footer;