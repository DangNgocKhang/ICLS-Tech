import { assets } from "@/assets/assets";
import BlogPost from "@/types/Blog";
import Image from "next/image";

type BlogCardProps = Omit<BlogPost, "id">;

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, date, tag, title }) => {
  return (
    <div className="shrink-0 px-6 md:px-0 group flex flex-col gap-2 w-screen md:w-[300px] relative overflow-hidden">
      <div className="z-50 h-screen w-[126px] bg-primary-blue-lighter bg-opacity-30 absolute -translate-x-[126px] -translate-y-[50px] lg:group-hover:translate-x-[300px] transition-transform duration-800 rotate-20 invisible lg:group-hover:visible"></div>

      <Image
        loading="lazy"
        src={imageUrl}
        height={340}
        width={500}
        alt={title}
        className="w-full lg:group-hover:translate-y-0.5 duration-500"
      />
      <div className="flex flex-col gap-2 lg:group-hover:-translate-y-0.5 duration-500">
        <div className="flex">
          <Image
            loading="lazy"
            height={24}
            width={24}
            src={assets.iconTimeCircleBlue}
            alt="iconTimeCircle"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square "
          />
          <span className="mx-2">{date}</span>
          <div className="h-max w-max bg-primary-blue-lighter md:px-2 text-xs md:text-base line-clamp-1">
            {tag}
          </div>
        </div>
        <h1 className="tracking-tighter md:tracking-normal font-bold text-2xl flex-1 line-clamp-3 lg:group-hover:text-primary-blue-lighter duration-500">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BlogCard;
