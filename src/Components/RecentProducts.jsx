import React from "react";
import { useLoaderData } from "react-router";
import LatestCard from "./LatestCard";
import { Fade, Slide } from "react-awesome-reveal";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const RecentProducts = () => {
  const data = useLoaderData();

  const [text] = useTypewriter({
        words: ["Featured Artworks"],
        loop: 0, 
        typeSpeed: 150,
        deleteSpeed: 80,
        delaySpeed: 2000,
      });

  return (
    <div className="container mx-auto">
      <div className="text-center lg:mt-20 md:my-10 my-5 lg:mb-10">
        <h1 className="text-4xl font-bold mb-2">
          {text}
          <Cursor cursorStyle="|" />
        </h1>
        <div className="text-xl">
          <Fade delay={1e3} cascade damping={1e-1}>
                  <div>Discover the latest masterpieces from our talented community</div>
                </Fade>
        </div>
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