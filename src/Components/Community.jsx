import React, { useEffect } from "react";
import { Star, Users, TrendingUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Community = () => {
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
    <section className="py-16 bg-white text-center">
      <h2 data-aos="fade-left" className="text-4xl md:text-3xl text-2xl font-bold text-gray-900 mb-3">
        Why Join Artify?
      </h2>
      <p data-aos="fade-right" className="text-gray-600 mb-12">
        Be part of a creative community that celebrates art in all its forms
      </p>

      <div className="grid md:grid-cols-3 gap-10 container mx-auto px-6">
        <div data-aos="fade-up" className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 bg-[#FF8C88]">
            <Star className="w-8 h-8 text-indigo-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Showcase Your Work
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Upload and display your artwork to a global audience of art enthusiasts
          </p>
        </div>

        <div data-aos="fade-up" className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 bg-gradient-to-r from-[#FF8C88] to-[#79D7D0]">
            <Users className="w-8 h-8 text-orange-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Connect with Artists
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Discover and follow talented artists, appreciate their work, and build connections
          </p>
        </div>

        <div data-aos="fade-up" className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 bg-[#79D7D0]">
            <TrendingUp className="w-8 h-8 text-purple-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Grow Your Presence
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Build your portfolio, gain recognition, and grow your artistic career
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
