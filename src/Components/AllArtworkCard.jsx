import React from "react";
import { Heart, Eye } from "lucide-react";
import { Link } from "react-router";

const AllArtworkCard = ({ art }) => {
  const { image, category, title, _id, userName, likes } = art;

  return (
    <div

    className="rounded-xl shadow-md border border-gray-100 hover:scale-105 transform transition ease-in-out overflow-hidden">

      <img src={image} alt={title} className="w-full h-52 object-cover" />


      <div className="p-4 space-y-2">

        <div className="flex justify-between item-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <span className="inline-block bg-[#FFD7D1] text-[#FF6F61] text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>


        <div className="flex items-center justify-between pt-1">
          <p className="text-sm text-gray-500">by : <span className="bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-transparent bg-clip-text font-semibold">{userName}</span></p>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{likes}</span>
          </div>
        </div>

        <Link
        to={`/explore-artworks/${_id}`} className="mt-4 ">
          <button className="flex text-white font-senibold items-center mt-4 w-full rounded-xl gap-1 btn bg-gradient-to-r from-[#FF8C88] to-[#79D7D0]">
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllArtworkCard;
