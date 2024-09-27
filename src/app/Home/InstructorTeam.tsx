"use client"
import React, { useRef } from "react";
import InstructorCard from "./InstructorCard";
import { assets, listLecturers } from "@/assets/assets";
import Image from "next/image";
import { SplitEffectWave } from "../components/SplitEffect";

interface Instructor {
  name: string;
  image: string;
}

const InstructorTeam: React.FC = () => {
  const images = listLecturers;

  const instructors: Instructor[] = [
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[0].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[1].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[2].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[3].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[4].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[5].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[6].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[7].src,
    },
    {
      name: "Ms. Trần Thị Cẩm Giang",
      image: images[8].src,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        window.innerWidth <= 640
          ? window.innerWidth - 24
          : window.innerWidth * 0.5;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        window.innerWidth <= 640
          ? window.innerWidth - 24
          : window.innerWidth * 0.5;
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  return (
    <main className="bg-primary-blue-lighter relative">
      <section className="flex flex-col md:px-10 pt-10">
        <h1 className="self-center -mt-2 text-4xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
          Đội ngũ giảng viên của ICLS Tech
        </h1>
        <div
          className=" px-6 flex overflow-x-auto hidden-scrolling gap-6 xl:gap-10 mt-8 text-white"
          ref={scrollContainerRef}
        >
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-4 gap-16 z-50">
          <Image
            src={assets.preWhiteButton}
            height={60}
            width={60}
            alt={`preWhiteButton`}
            onClick={handleScrollLeft}
            className="cursor-pointer max-md:scale-75"
          />

          <Image
            src={assets.nextWhiteButton}
            height={60}
            width={60}
            alt={`nextWhiteButton`}
            onClick={handleScrollRight}
            className="cursor-pointer max-md:scale-75"
          />
        </div>
      </section>
      <SplitEffectWave />

    </main>
  );
};

export default InstructorTeam;
