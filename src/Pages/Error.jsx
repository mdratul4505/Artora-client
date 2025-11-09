import React from 'react';
import errorimg from '../../public/images.jpeg'


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <img
        src={errorimg}
        alt="404 Error"
        className="w-80 h-60 max-w-full mb-6"
      />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="lg:text-lg mb-6 text-gray-300">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
      >
        Go Back Home
      </a>
      </div>

    );
};

export default Error;