import React from "react";
import { useLoaderData } from "react-router";

const CartDeatils = () => {
  const data = useLoaderData();

  const {
    image,
    title,
    category,
    medium,
    description,
    dimensions,
    price,
    userName,
    created_at,
    likes = 0,
  } = data || {};

  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="min-h-screen bg-[#FCF9F5] flex justify-center items-center px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        <div className="overflow-hidden p-5">
          <img
            src={image}
            alt={title}
            className="w-full h-150  rounded-2xl object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
              <span className="text-xs font-medium bg-[#111440] text-white px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Created on {formattedDate}
            </p>

            <div className="mt-4 p-3 border rounded-xl flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-semibold">
                {userName?.[0]?.toUpperCase() || "A"}
              </div>
              <div>
                <p className="text-sm text-gray-400">Artist</p>
                <h3 className="font-medium text-gray-800">{userName}</h3>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>
                <span className="font-semibold text-gray-800">Medium:</span>{" "}
                {medium}
              </p>
              <p>
                <span className="font-semibold text-gray-800">
                  Description:
                </span>{" "}
                {description}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Dimensions:</span>{" "}
                {dimensions}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Price:</span> $ 
                <span className="text-red-400 ml-1">{price}</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white font-medium shadow-md hover:opacity-90 transition">
              ❤️ Like ({likes})
            </button>
            <button className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:text-white hover:bg-purple-300 transition">
              ☆ Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDeatils;
