import BlogCard from "./BlogCard";
import { blogPosts } from "@/tempData/blog";

const BlogSharing = () => {
  return (
    <main className=" md:px-10 md:pt-10">
      <div className="flex justify-center items-center text-center mb-6 text-primary-blue-lighter">
        <h1 className="mt-10 self-center text-4xl font-bold text-center max-md:max-w-full max-md:text-4xl">
          Blog chia sẻ kiến thức từ ICLS Tech
        </h1>
      </div>
      <div className="flex items-center md:justify-evenly gap-10 overflow-hidden">
        {blogPosts.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  );
};

export default BlogSharing;
