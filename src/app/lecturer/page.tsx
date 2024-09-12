import React, { ReactElement } from "react";
import CircularBackground from "./components/CircularBackground";
import { listLecturers } from "@/assets/assets";
import InstructorCard from "./components/InstructorCard";
interface Instructor {
  name: string;
  image: string;
}
export default function Page(): ReactElement {
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
    <div className="">
      <CircularBackground title={"GIẢNG VIÊN"} />
      <div className="px-6 md:px-10 py-10 grid grid-cols-12 gap-y-6 lg:gap-10 text-white place-items-center justify-self-center">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} {...instructor} />
        ))}
      </div>
    </div>
  );
}
