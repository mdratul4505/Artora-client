import { Link } from 'lucide-react';
import React from 'react';

const ArtistCTA = () => {
    return (
         <section className="w-full bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] flex flex-col items-center justify-center text-center py-24 px-6">

      <h1 className="text-white text-4xl md:text-5xl font-bold">
        Ready to Share Your Art with the World?
      </h1>


      <p className="text-white text-lg md:text-xl mt-4 max-w-2xl">
        Join thousands of artists who are already showcasing their creativity on{" "}
        <span className="font-semibold text-red-400">ARTIFY</span>.
      </p>

    </section>
    );
};

export default ArtistCTA;