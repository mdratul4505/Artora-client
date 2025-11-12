import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import FavoriteCards from "../Components/FavoriteCards";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  const [text] = useTypewriter({
    words: ["My Favorites Card"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  useEffect(() => {
    if (user?.email) {
      fetch(`https://artora-server.vercel.app/favorites?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setFavorites(data));
    }
  }, [user]);

  const handleDelete = async (id) => {
    const res = await fetch(
      `https://artora-server.vercel.app/favorites/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      setFavorites((prev) => prev.filter((fav) => fav._id !== id));
    }
  };

  return (
    <div className="my-10 container mx-auto ">
      <h2 className="md:text-3xl text-2xl lg:text-4xl text-center font-bold mb-10">
        {text}
        <Cursor cursorStyle="|" />
        <span className="text-gray-500 ml-2">({favorites.length})</span>
      </h2>
      {favorites.length === 0 ? (
        <p className="text-center">No favorites yet.</p>
      ) : (
        <div className="grid px-4 grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((fav) => (
            <FavoriteCards key={fav._id} fav={fav} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
