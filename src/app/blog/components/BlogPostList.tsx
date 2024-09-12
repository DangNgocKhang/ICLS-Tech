import React from "react";
import BlogPostCard from "./BlogPostCard";
import { assets } from "@/assets/assets";
import BlogCategory from "./BlogCategory";

interface BlogPost {
  date: string;
  category: string;
  title: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    date: "5/8/2023",
    category: "Blog Deep Learning",
    title: "Học tập hiệu quả với phương pháp tự điều chỉnh",
    imageUrl: assets.girl.src,
  },
  {
    date: "5/8/2023",
    category: "Blog Deep Learning",
    title: "Học tập hiệu quả với phương pháp tự điều chỉnh",
    imageUrl: assets.girl.src,
  },
  {
    date: "5/8/2023",
    category: "Blog Deep Learning",
    title: "Học tập hiệu quả với phương pháp tự điều chỉnh",
    imageUrl: assets.girl.src,
  },
  {
    date: "5/8/2023",
    category: "Blog Deep Learning",
    title: "Học tập hiệu quả với phương pháp tự điều chỉnh",
    imageUrl: assets.girl.src,
  },
];

const BlogPostList: React.FC = () => {
  return (
    <main className="h-max w-full overflow-hidden px-6 md:px-10 py-10 md:py-20 grid grid-cols-12 md:gap-16">
      <div className="col-span-full xl:col-span-8 ">
        <div className="flex flex-col gap-5">
          {blogPosts &&
            blogPosts.map((item, index) => (
              <BlogPostCard
                key={index}
                date={item.date}
                category={item.category}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            ))}
        </div>
      </div>
      <div className="col-span-full xl:col-span-4 ">
        <div className="flex flex-col gap-5 h-max bg-gray-100 p-5">
          <div className="text-2xl font-bold uppercase mx-auto text-center">
            Bài viết mới nhất
          </div>
          {blogPosts &&
            blogPosts.map((item, index) => (
              <BlogCategory
                key={index}
                date={item.date}
                category={item.category}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            ))}
        </div>
        <div className="flex flex-col gap-5 h-max bg-gray-100 p-5 mt-9">
          <div className="text-2xl font-bold uppercase mx-auto text-center">
            Bài viết PHỔ BIẾN
          </div>
          {blogPosts &&
            blogPosts.map((item, index) => (
              <BlogCategory
                key={index}
                date={item.date}
                category={item.category}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPostList;
