import React, { useState } from "react";

const FilterCategory = ({ onFilter }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "All",
    "Painting",
    "Digital",
    "Photography",
    "Sculpture",
    "Illustration",
  ];

  const handleFilter = async (category) => {
    setActiveCategory(category);

    try {
      const res = await fetch(
        `http://localhost:3000/filter-artworks?category=${category.toLowerCase()}`
      );
      const data = await res.json();
      onFilter(data); 
    } catch (error) {
      console.error("Failed to fetch filtered artworks:", error);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-4 flex items-center gap-4 justify-center flex-wrap rounded-xl">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === cat
              ? "bg-pink-500 text-white shadow-md"
              : "bg-white dark:bg-gray-700 dark:text-gray-200 text-gray-700 hover:bg-pink-100 dark:hover:bg-pink-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterCategory;
