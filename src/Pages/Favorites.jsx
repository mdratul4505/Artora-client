import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import FavoriteCards from "../Components/FavoriteCards";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/favorites?email=${user.email}`)
        .then(res => res.json())
        .then(data => setFavorites(data));
    }
  }, [user]);

  // handle delete from parent
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE"
    });

    if (res.ok) {
      setFavorites(prev => prev.filter(fav => fav._id !== id));
    }
  };

  return (
    <div className="my-10 container mx-auto bg-white">
      <h2 className="text-3xl text-center font-bold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map(fav => (
            <FavoriteCards
              key={fav._id}
              fav={fav}
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;