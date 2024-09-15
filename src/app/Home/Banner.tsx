// src/components/Banner.tsx
import React, { useEffect, useState } from "react";
import { listBanners } from "@/assets/assets";

const Banner: React.FC = () => {
  const images = listBanners;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);
  const handleScroll = () => {
    window.scrollBy({
      top:
        window.innerWidth > 1024 ? window.innerHeight : window.innerHeight - 70,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-full h-max lg:h-screen overflow-x-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-max w-max z-10 flex">
        <section className="flex-1 m-auto flex flex-col font-bold text-center uppercase">
          <header className="flex flex-col justify-center w-full text-white max-md:max-w-full font-semibold">
            <h1 className="self-center md:text-2xl">
              CHÀO MỪNG BẠN ĐẾN VỚI ICLS TECH
            </h1>
            <h2 className="mt-2 lg:mt-5 md:text-6xl lg:text-7xl max-md:max-w-full text-4xl">
              CỘNG ĐỒNG
            </h2>
            <p className="mt-2 lg:mt-5 text-2xl md:text-3xl lg:text-4xl max-w-[95dvw]">
              Quantitative trading đầu tư định lượng
            </p>
          </header>
          <button className="self-center flex flex-col justify-center items-center px-5 py-3 mt-8 max-w-full text-xl font-bold text-center text-primary-blue-lighter uppercase bg-white shadow-register h-max w-[230px]"
          onClick={handleScroll}>
                <span className="flex-1">KHÁM PHÁ NGAY</span>
                <div className="mt-2.5 w-full bg-primary-blue-lighter border-primary-blue-lighter border-solid h-[3px]" />
              </button>
        </section>
      </div>

      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-screen bg-cover bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-primary-blue" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
