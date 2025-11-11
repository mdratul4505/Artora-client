import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router"; 
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import logo from "../../public/logo.png";

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user artworks
  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:3000/my-gallery?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setArts(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          toast.error("Failed to load gallery");
        });
    }
  }, [user]);

  // Delete artwork
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/explore-artworks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire(
              "Deleted!",
              "Your artwork has been deleted.",
              "success"
            );
            setArts((prev) => prev.filter((art) => art._id !== id));
          })
          .catch(() => toast.error("Failed to delete."));
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-[#FF8C88] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <img
          className="h-15 mb-4 bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] rounded-xl"
          src={logo}
          alt="Logo"
        />
        <h1 className="text-3xl font-semibold text-center">
          My Gallery ({arts.length})
        </h1>
      </div>

      {/* Artwork Grid */}
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

                <div className="flex justify-between mt-2">
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
