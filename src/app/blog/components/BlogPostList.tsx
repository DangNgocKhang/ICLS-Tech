"use client";

import React, { useEffect } from "react";
import BlogPostCard from "./BlogPostCard";
import BlogCategory from "./BlogCategory";
import BlogPost from "@/types/Blog";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchBlogList = async (): Promise<BlogPost[]> => {
  const response = await axios.get<{ blogs: BlogPost[] }>("/api/blog");
  return response.data.blogs;
};

const BlogPostList: React.FC = () => {
  const { data: listBlog } = useQuery({
    queryKey: ["BlogList"],
    queryFn: () => fetchBlogList(),
    staleTime: 60 * 60 * 1000,
    retry: false,
  });

  useEffect(() => {
    if (listBlog) {
      console.log(listBlog);
    }
  }, [listBlog]);
  return (
    <main className="h-max w-full overflow-hidden px-6 md:px-10 py-10 grid grid-cols-12 gap-4 md:gap-16">
      <div className="col-span-full xl:col-span-8 ">
        <div className="flex flex-col gap-5">
          {listBlog &&
            listBlog.map((blog: BlogPost) => (
              <BlogPostCard key={blog.id} {...blog} />
            ))}
        </div>
      </div>
      <div className="hidden md:block col-span-full xl:col-span-4">
        <div className="flex flex-col gap-5 h-max bg-gray-100 p-5">
          <div className="text-2xl font-bold uppercase mx-auto text-center">
            Bài viết mới nhất
          </div>
          {listBlog &&
            listBlog.map((blog) => <BlogCategory key={blog.id} {...blog} />)}
        </div>
        <div className="flex flex-col gap-5 h-max bg-gray-100 p-5 mt-4 md:mt-9">
          <div className="text-2xl font-bold uppercase mx-auto text-center">
            Bài viết PHỔ BIẾN
          </div>
          {listBlog &&
            listBlog.map((blog) => <BlogCategory key={blog.id} {...blog} />)}
        </div>
      </div>
    </main>
  );
};

export default BlogPostList;
