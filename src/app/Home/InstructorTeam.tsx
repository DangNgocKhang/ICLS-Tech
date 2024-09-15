import React, { useRef } from "react";
import InstructorCard from "./InstructorCard";
import { assets, listLecturers } from "@/assets/assets";
import Image from "next/image";

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
        window.innerWidth <= 640 ? window.innerWidth : window.innerWidth * 0.5; // Scroll by 50% of the screen width
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        window.innerWidth <= 640 ? window.innerWidth : window.innerWidth * 0.5; // Scroll by 50% of the screen width
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  return (
    <main className="bg-primary-blue-lighter relative md:pb-[75px] xl:pb-[150px]">
      <section className="flex flex-col px-6 md:px-10 pt-10">
        <h1 className="self-center -mt-2 text-4xl uppercase font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
          Đội ngũ giảng viên của ICLS Tech
        </h1>
        <div
          className="grid  grid-flow-col auto-cols-max overflow-x-auto hidden-scrolling gap-2 md:gap-6 xl:gap-10 mt-8 text-white place-items-center justify-self-center"
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
      <Image
        loading="lazy"
        src={assets.effectWave}
        height={10}
        width={1440}
        alt={`effectWave `}
        className="w-screen scale-y-50 absolute bottom-0 translate-y-14 md:translate-y-16"
      />
    </main>
  );
};

export default InstructorTeam;
