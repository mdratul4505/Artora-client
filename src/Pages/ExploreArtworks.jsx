import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import AllArtworkCard from "../Components/AllArtworkCard";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreArtworks = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container mx-auto">
      <div
      data-aos="fade-left"
      className="font-bold text-4xl text-center mt-10 mb-5">
        Explore Artworks ({data.length})
      </div>
      <div
      data-aos="fade-right"
      className="text-xl text-center">
        Discover amazing artworks from talented artists around the world
      </div>
      <div
      data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      className="flex justify-center my-10">
        <label className="flex items-center gap-2 w-11/12 md:w-9/12 lg:w-6/12 px-4 py-2 bg-white rounded-lg md:rounded-lg lg:rounded-2xl border border-gray-300 focus-within:border-[#FF8C88] focus-within:ring-2 focus-within:ring-[#FF8C88] transition">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search by title or artist name..."
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
        </label>
      </div>

      <div
       

      className="grid my-15 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {data.map((art) => (
          <AllArtworkCard key={art._id} art={art}></AllArtworkCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreArtworks;
