import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const ArtistCTA = () => {

   useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh(); 
    }, []);

    return (
         <section
         data-aos="zoom-in-down"
         className="w-full my-20 bg-gradient-to-r from-[#FF8C88] to-[#79D7D0]   flex flex-col items-center justify-center text-center py-24 px-6">

      <h1
      data-aos="fade-left"
      className="text-white text-3xl md:text-4xl font-bold">
        
        Ready to Share Your Art with the World?
      </h1>


      <p
      data-aos="fade-right"
      className="text-white text-lg md:text-xl mt-4 max-w-2xl">
        Join thousands of artists who are already showcasing their creativity on{" "}
        <span className="font-semibold text-red-400">ARTIFY</span>.
      </p>

    </section>
    );
};

export default ArtistCTA;