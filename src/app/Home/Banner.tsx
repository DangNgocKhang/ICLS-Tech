// src/components/Banner.tsx
import React, { useEffect, useState } from "react";
import { listBanners } from "@/assets/assets";
import ButtonPrimaryWhite from "../components/ButtonPrimaryWhite";

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
      <div className="absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 h-max w-max z-10 flex">
        <section className="flex-1 md:mt-0 m-auto flex flex-col font-bold text-center uppercase">
          <header className="flex flex-col justify-center w-full text-white max-md:max-w-full font-semibold">
            <h1 className="self-center text-sm md:text-2xl">
              CHÀO MỪNG BẠN ĐẾN VỚI ICLS TECH
            </h1>
            <h2 className="my-2 lg:mt-5 md:text-6xl lg:text-7xl max-md:max-w-full text-3xl font-bold">
              CỘNG ĐỒNG
            </h2>
            <p className="lg:mt-5 text-base md:text-3xl lg:text-4xl max-w-[95dvw] leading-snug">
              Quantitative trading <br className=" md:hidden"/> đầu tư định lượng
            </p>
          </header>
          
          <ButtonPrimaryWhite value="KHÁM PHÁ NGAY" handleClick={handleScroll} stylElement="self-center mt-2 md:mt-8"/>
          </section>
      </div>

      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[40vh] lg:h-screen bg-cover bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
      </div>
      <div className="hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 md:flex space-x-2">
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
