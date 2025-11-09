import React from 'react';

import { Star, Users, TrendingUp } from "lucide-react";

const Community = () => {
    return (
            <section className="py-16 bg-white  text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Why Join Artify?
      </h2>
      <p className="text-gray-600 mb-12">
        Be part of a creative community that celebrates art in all its forms
      </p>

      {/* 3 Hardcoded Cards */}
      <div className="grid md:grid-cols-3 gap-10 container mx-auto px-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 bg-[#FF8C88]">
            <Star className="w-8 h-8 text-indigo-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Showcase Your Work
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Upload and display your artwork to a global audience of art
            enthusiasts
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 bg-gradient-to-r from-[#FF8C88] to-[#79D7D0]git">
            <Users className="w-8 h-8 text-orange-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Connect with Artists
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Discover and follow talented artists, appreciate their work, and
            build connections
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 bg-[#79D7D0]">
            <TrendingUp className="w-8 h-8 text-purple-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Grow Your Presence
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Build your portfolio, gain recognition, and grow your artistic
            career
          </p>
        </div>
      </div>
    </section>
    );
};

export default Community;