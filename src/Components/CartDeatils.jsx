

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const CartDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const [likeCount, setLikeCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [artistArtworks, setArtistArtworks] = useState([]);
  const [artistInfo, setArtistInfo] = useState({
    totalArtworks: 0,
  });


  useEffect(() => {
    fetch(`https://artora-server.vercel.app/explore-artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLikeCount(data.likes || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load artwork");
      });
  }, [id]);


  useEffect(() => {
    if (data.likes !== undefined) {
      setLikeCount(data.likes);
    }
  }, [data]);

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
    userPhoto,
  } = data || {};

  const formattedDate = created_at
    ? new Date(created_at).toLocaleDateString()
    : "";

  // ❤️ Handle Like
  const handleLike = async () => {
    try {
      const res = await fetch(
        `https://artora-server.vercel.app/explore-artworks/${_id}/like`,
        { method: "PATCH" }
      );

      if (res.ok) {
        const updated = await fetch(
          `https://artora-server.vercel.app/explore-artworks/${_id}`
        ).then((r) => r.json());
        setLikeCount(updated.likes);
        setData(updated);
        toast.success("You liked this artwork ❤️");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error liking artwork");
    }
  };

  // ⭐ Handle Favorite
  const handleFavorite = async () => {
    if (!user?.email) return toast.error("Login first to add favorites!");
    try {
      const res = await fetch("https://artora-server.vercel.app/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artworkId: _id,
          title,
          image,
          userName,
          userEmail: user.email,
        }),
      });

      if (res.ok) {
        setIsFavorite(true);
        toast.success("Added to favorites!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add favorite!");
    }
  };


  useEffect(() => {
    if (userName) {
      fetch(`https://artora-server.vercel.app/artist-artworks/${userName}`)
        .then((res) => res.json())
        .then((data) => {
          setArtistArtworks(data || []);
          setArtistInfo({ totalArtworks: data.length });
        })
        .catch((err) => console.error(err));
    }
  }, [userName]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
      <div className="rounded-2xl shadow-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="p-5">
          <img
            src={image}
            alt={title}
            className="w-full h-150 rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{title}</h1>
              <span className="text-xs bg-[#111440] text-white px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Created on {formattedDate}
            </p>

            <div className="mt-4 p-3 border rounded-xl flex items-center gap-3">
              <img
                className="rounded-full h-10 w-10"
                src={userPhoto}
                alt={userName}
              />
              <div>
                <p className="text-sm text-gray-400">Artist</p>
                <h3 className="font-medium">{userName}</h3>
                <p className="text-xs text-gray-500">
                  {artistInfo.totalArtworks} artworks
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p>
                <span className="font-semibold">Medium:</span> {medium}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {description}
              </p>
              <p>
                <span className="font-semibold">Dimensions:</span> {dimensions}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-red-500">${price}</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleLike}
              className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white font-medium hover:opacity-90 transition"
            >
              ❤️ Like ({likeCount})
            </button>
            <button
              onClick={handleFavorite}
              disabled={isFavorite}
              className={`flex-1 py-2 rounded-lg border font-medium transition ${
                isFavorite
                  ? "bg-purple-300 text-white cursor-not-allowed"
                  : "hover:bg-purple-300 hover:text-white"
              }`}
            >
              ☆ {isFavorite ? "Added" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold mb-4">
          Other artworks by {userName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {artistArtworks.length > 0 ? (
            artistArtworks.map((art) => (
              <div key={art._id} className="border rounded-lg overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-medium">{art.title}</h3>
                  <p className="text-sm text-gray-600">{art.medium}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-400">
              No other artworks
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

