import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseCardProps {
  path: string;
  title: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ path, title }) => {
  return (
    <Link
      href={path}
      className={`col-span-6 lg:col-span-3 flex flex-col justify-center items-center h-full px-2 py-5 md:py-12 lg:py-16 my-auto bg-primary-blue-darker w-full group xl:hover:bg-course-card-hover xl:hover:duration-700 xl:hover:cursor-pointer xl:hover:text-primary-blue-lighter bg-course-card`}
    >
      <div className="flex-1 flex flex-col justify-start items-center ">
        <Image
          loading="lazy"
          src={assets.brainBlue}
          alt={"brainBlue"}
          height={100}
          width={100}
          className="hidden md:block xl:group-hover:hidden object-contain self-center max-w-full aspect-square scale-90	md:scale-100"
        />
        <Image
          loading="lazy"
          src={assets.brainBlueLighter}
          alt={"brainBlue"}
          height={100}
          width={100}
          className="block md:hidden xl:group-hover:block object-contain self-center max-w-full aspect-square scale-90	md:scale-100"
        />
        <div className="flex flex-col mt-2 md:mt-8 w-full">
          <h2 className="self-center text-sm md:text-xl font-medium md:font-semibold uppercase tracking-tight">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
