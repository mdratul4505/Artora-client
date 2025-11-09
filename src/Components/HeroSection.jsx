import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="mb-6 lg:mb-8">
      {/* ✅ Swiper main container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation  // <-- next/prev buttons enabled
        pagination={{ clickable: true }}  // <-- dots enabled
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="shadow-xl rounded-xl overflow-hidden"
      >
        {/* ✅ Slide 1 with image background */}
        <SwiperSlide>
          {/* 🔹 Background image set using inline style */}
          <div
            className="hero min-h-[60vh] md:min-h-[80vh] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/673zRdKC/42e3a7489bc38334c193d5c680c5336f.jpg')",
            }}
          >
            {/* 🔹 Dark overlay for better text visibility */}
            

            {/* 🔹 Hero content */}
            <div className="hero-content text-center relative z-10 text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Explore Artistic Souls 🎨</h1>
                <p className="py-6">
                  Discover trending artists and breathtaking artwork from around the world.
                </p>
                <button className="btn bg-gradient-to-r from-[#79D7D0] to-[#FF8C88] border-none text-white">
                  Get Inspired
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Slide 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[60vh] md:min-h-[80vh] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/1tnM2wpk/9ff343bc62e65f4e2a8eebbf3c7dd5a5.jpg')",
            }}
          >
            

            {/* 🔹 Slide text content */}
            <div className="hero-content text-center relative z-10 text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Inspire Through Art 🖌️</h1>
                <p className="py-6">
                  Share your creativity and connect with other passionate artists.
                </p>
                <button className="btn bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] border-none text-white">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Slide 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[60vh] md:min-h-[80vh] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/yFFhMzWV/7d32e032191c44f7887f17658467b498.jpg')",
            }}
          >
           

            {/* 🔹 Text content */}
            <div className="hero-content text-center relative z-10 text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Discover Trending Artists 🌟</h1>
                <p className="py-6">
                  See what's hot in the art world and follow your favorite creators.
                </p>
                <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
