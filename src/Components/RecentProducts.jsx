import React from "react";
import { useLoaderData } from "react-router";
import LatestCard from "./LatestCard";

const RecentProducts = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="text-center lg:mt-20 md:my-10 my-5 lg:mb-10">
        <h1 className="text-4xl font-bold mb-2">Featured Artworks</h1>
        <p className="text-xl">
          Discover the latest masterpieces from our talented community
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((art) => (
          <LatestCard key={art._id} art={art}></LatestCard>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;