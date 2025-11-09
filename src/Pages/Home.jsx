import React from "react";
import HeroSection from "../Components/HeroSection";
import TopArts from "../Components/TopArts";
import Community from "../Components/Community";
import ArtistCTA from "../Components/ArtistCTA";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <TopArts />
      <Community />
      <ArtistCTA />
    </div>
  );
};

export default Home;
