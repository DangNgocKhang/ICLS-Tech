import React from "react";
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
  return (
    <main className="bg-primary-blue-lighter">
      <section className="flex flex-col px-6 md:px-10 pt-10 md:pt-20">
        <h1 className="self-center -mt-2 text-6xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
          Đội ngũ giảng viên của ICLS Tech
        </h1>
        <div className="grid grid-cols-12 gap-y-6 lg:gap-10 mt-8 text-white place-items-center justify-self-center">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </section>
      <Image
        loading="lazy"
        src={assets.effectWave}
        height={10}
        width={1440}
        alt={`effectWave `}
        className="w-screen max-md:max-w-full"
      />
    </main>
  );
};

export default InstructorTeam;
