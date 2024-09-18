import React from "react";
import BlogPostCard from "./BlogPostCard";
import BlogCategory from "./BlogCategory";
import { blogPosts } from "@/tempData/blog";


const BlogPostList: React.FC = () => {
  return (
    <main className="h-max w-full overflow-hidden px-6 md:px-10 py-10 grid grid-cols-12 gap-4 md:gap-16">
      <div className="col-span-full xl:col-span-8 ">
        <div className="flex flex-col gap-5">
          {blogPosts &&
            blogPosts.map((blog, index) => (
              <BlogPostCard
                key={index}
                {...blog}
              />
            ))}
        </div>
      </div>
      <div className="hidden md:block col-span-full xl:col-span-4">
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
        <div className="flex flex-col gap-5 h-max bg-gray-100 p-5 mt-4 md:mt-9">
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
