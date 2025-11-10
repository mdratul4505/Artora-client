import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const CartDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {user} = use(AuthContext)
 

  const {
    _id,
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


  const [likeCount, setLikeCount] = useState(likes);
  const [isFavorite, setIsFavorite] = useState(false);

  const formattedDate = new Date(created_at).toLocaleDateString();


  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/explore-artworks/${_id}/like`, {
        method: "PATCH",
      });
      if (res.ok) {
        setLikeCount((prev) => prev + 1);
        toast.success("You liked this artwork ❤️");
      } else {
        toast.error("Failed to like artwork");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error while liking artwork");
    }
  };


  const handleFavorite = async () => {
    try {
      const res = await fetch(`http://localhost:3000/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artworkId: _id,
          title,
          image,
          userName,
          userEmail: "test@example.com",
        }),
      });

      if (res.ok) {
        setIsFavorite(true);
        toast.success("Added to favorites ⭐");
        navigate("/favorites"); 
      } else {
        toast.error("Failed to add favorite!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error adding to favorites!");
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F5] flex justify-center items-center px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        <div className="overflow-hidden p-5">
          <img
            src={image}
            alt={title}
            className="w-full h-150 rounded-2xl object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
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
              <div className="flex items-center justify-center text-lg font-semibold">
                {<div className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] rounded-full h-10 w-10"><img className="text-white rounded-full h-10 w-10 " src={user.photoURL} alt="" /></div> || "A"}
              </div>
              <div>
                <p className="text-sm text-gray-400">Artist</p>
                <h3 className="font-medium text-gray-800">{userName}</h3>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>
                <span className="font-semibold text-gray-800">Medium:</span> {medium}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Description:</span> {description}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Dimensions:</span> {dimensions}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Price:</span> $
                <span className="text-red-400 ml-1">{price}</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={handleLike}
              className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white font-medium shadow-md hover:opacity-90 transition"
            >
              ❤️ Like ({likeCount})
            </button>
            <button
              onClick={handleFavorite}
              disabled={isFavorite}
              className={`flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium transition ${
                isFavorite
                  ? "bg-purple-300 text-white cursor-not-allowed"
                  : "hover:text-white hover:bg-purple-300"
              }`}
            >
              ☆ {isFavorite ? "Added" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
