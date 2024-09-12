import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface BlogPostCardProps {
  date: string;
  category: string;
  title: string;
  imageUrl?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  date,
  category,
  title,
  imageUrl,
}) => {
  return (
    <div className="w-full h-[100px] md:h-[310px] flex">
      <div className="md:flex-1 overflow-hidden">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            loading="lazy"
            src={imageUrl ? imageUrl : ""}
            alt="iconTimeCircle"
            className="object-cover h-[100px] w-[100px] md:h-[310px] md:w-[500px] "
          />
        }
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="h-max w-full ml-4 flex flex-col gap2 md:gap-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex">
              <Image
                loading="lazy"
                height={24}
                width={24}
                src={assets.iconTimeCircleBlue}
                alt="iconTimeCircle"
                className="object-contain shrink-0 self-stretch my-auto w-4 md:w-6 aspect-square mr-2"
              />
              <span>{date}</span>
            </div>
            <div className="h-max w-max bg-primary-blue-lighter md:px-2 text-xs md:text-base line-clamp-1">
              {category}
            </div>
          </div>
          <div className="text-base md:text-4xl font-bold break-normal line-clamp-2 lg:line-clamp-3">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
