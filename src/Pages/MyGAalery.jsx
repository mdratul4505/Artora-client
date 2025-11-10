import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import toast from "react-hot-toast";

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [arts, setArts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/explore-artworks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setArts(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  // ✅ Delete Function
  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this artwork?");
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/explore-artworks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("🗑️ Artwork deleted!");
        setArts((prev) => prev.filter((art) => art._id !== id));
      })
      .catch(() => toast.error("❌ Failed to delete."));
  };

  return (
    <div className="min-h-screen bg-[#FCF9F5] px-4 py-10">
      <h1 className="text-2xl font-semibold text-center mb-8">
        🎨 My Gallery ({arts.length})
      </h1>

      {arts.length === 0 ? (
        <p className="text-center text-gray-500">No artworks added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {arts.map((art) => (
            <div
              key={art._id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{art.title}</h3>
                <p className="text-sm text-gray-500">{art.category}</p>

                <div className="flex justify-between">
                  <Link to={`/update/${art._id}`}>
                    <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(art._id)}
                    className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGallery;
