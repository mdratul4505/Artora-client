import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="mb-6 lg:mb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation //
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="shadow-xl rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <div
            className="hero min-h-[50vh] md:min-h-[70vh] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/673zRdKC/42e3a7489bc38334c193d5c680c5336f.jpg')",
            }}
          >
            <div className="hero-content text-center relative z-10 text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Explore Artistic Souls 🎨
                </h1>
                <p className="py-6">
                  Discover trending artists and breathtaking artwork from around
                  the world.
                </p>
                <Link to={'/explore-artworks'} className="btn bg-gradient-to-r from-[#79D7D0] to-[#FF8C88] border-none text-white">
                  Get Inspired
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider-2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[50vh] md:min-h-[70vh] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/1tnM2wpk/9ff343bc62e65f4e2a8eebbf3c7dd5a5.jpg')",
            }}
          >
            <div className="hero-content text-center relative z-10 text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Inspire Through Art 🖌️</h1>
                <p className="py-6">
                  Share your creativity and connect with other passionate
                  artists.
                </p>
                <Link to={'/login'} className="btn bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] border-none text-white">
                  Join Community
                </Link >
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider-3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[50vh] md:min-h-[70vh] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/yFFhMzWV/7d32e032191c44f7887f17658467b498.jpg')",
            }}
          >
            <div className="hero-content text-center relative z-10 text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Discover Trending Artists 🌟
                </h1>
                <p className="py-6">
                  See what's hot in the art world and follow your favorite
                  creators.
                </p>
                <Link to={'/explore-artworks'} className="btn bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
