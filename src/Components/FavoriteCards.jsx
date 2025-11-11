import React from "react";
import Swal from "sweetalert2";

const FavoriteCards = ({ fav, onDelete }) => {
  const { userName, title, image, _id } = fav;

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(_id);
        Swal.fire("Deleted!", "Your favorite has been deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:scale-105 transform transition ease-in-out overflow-hidden">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <span>{userName}</span>
          <span>{title}</span>
        </div>
        <button
          onClick={handleRemove}
          className="mt-2 px-2 py-1 bg-red-400 text-white rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavoriteCards;