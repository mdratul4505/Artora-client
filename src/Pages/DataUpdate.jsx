import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";

const DataUpdate = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const data = useLoaderData();
  const { _id, image, title, category, medium, description, dimensions, price, visibility } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      image: form.image.value,
      title: form.title.value,
      category: form.category.value,
      medium: form.medium.value,
      description: form.description.value,
      dimensions: form.dimensions.value,
      price: form.price.value,
      visibility: form.visibility.value,
    };

    fetch(`http://localhost:3000/explore-artworks/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("✅ Artwork updated successfully!");
        navigate("/my-gallery");
      })
      .catch(() => toast.error("❌ Failed to update."));
  };

  return (
    <div className="min-h-screen bg-[#FCF9F5] flex items-center justify-center px-4 py-20">
      <form
        onSubmit={handleUpdate}
        className="bg-white rounded-xl shadow-md w-full max-w-xl space-y-5 px-6 py-10"
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">
          ✏️ Update Artwork
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={image}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            defaultValue={category}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
          >
            <option value="painting">Painting</option>
            <option value="digital">Digital Art</option>
            <option value="photography">Photography</option>
            <option value="sculpture">Sculpture</option>
            <option value="illustration">Illustration</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Medium</label>
          <input
            type="text"
            name="medium"
            defaultValue={medium}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            rows="3"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Dimensions</label>
            <input
              type="text"
              name="dimensions"
              defaultValue={dimensions}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Visibility</label>
          <select
            name="visibility"
            defaultValue={visibility}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white font-semibold"
        >
          Update Artwork
        </button>
      </form>
    </div>
  );
};

export default DataUpdate;
