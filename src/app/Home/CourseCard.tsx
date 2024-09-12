import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseCardProps {
  path: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  path,
  title,
  description,
}) => {
  return (
    <Link
      href={path}
      className="col-span-full md:col-span-4 flex flex-col justify-center items-center h-full px-3.5 py-16 my-auto bg-primary-blue-darker w-full xl:w-[300px] group xl:hover:bg-white xl:hover:duration-300 xl:hover:cursor-pointer xl:hover:text-primary-blue-lighter"
    >
      <div className="flex flex-col justify-center items-center max-w-full w-[292px] ">
        <Image
          loading="lazy"
          src={assets.brain}
          alt={title}
          height={100}
          width={100}
          className="object-contain self-center max-w-full aspect-square"
        />
        <div className="flex flex-col mt-8 w-full">
          <h2 className="self-center text-2xl font-semibold">{title}</h2>
          <p className="mt-5 text-base leading-5 xl:group-hover:text-black">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
