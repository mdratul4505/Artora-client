import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <CircleLoader color="#FF8C88" size={80} />
    </div>
  );
};

export default Loading;