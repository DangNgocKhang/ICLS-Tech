import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface BlogCategoryProps {
  date: string;
  category: string;
  title: string;
  imageUrl?: string;
}

const BlogCategory: React.FC<BlogCategoryProps> = ({
  date,
  category,
  title,
  imageUrl,
}) => {
  return (
    <div className="w-full h-[86px] flex">
      <div className="h-full aspect-square  overflow-hidden">
        <Image
          loading="lazy"
          height={86}
          width={86}
          src={imageUrl ? imageUrl : ""}
          alt="imageUrl"
          className="object-contain"
        />
      </div>
      <div className="flex-1  flex justify-center items-center">
        <div className="h-max w-full ml-4 flex flex-col gap-4">
          <div className="text-base line-clamp-2 lg:line-clamp-3">{title}</div>
          <div className="w-full flex justify-between items-center">
            <div className="flex text-xs">
              <Image
                loading="lazy"
                height={24}
                width={24}
                src={assets.iconTimeCircleBlue}
                alt="iconTimeCircle"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square mr-2"
              />
              <span>{date}</span>
            </div>
            <div className="h-max w-max bg-primary-blue-lighter text-xs line-clamp-1">
              {category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
