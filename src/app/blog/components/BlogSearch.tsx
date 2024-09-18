import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogSearch: React.FC = () => {
  const tags = [
    "#Tất cả",
    "#data",
    "#machinelearning",
    "#Tất cả",
    "#data",
    "#machinelearning",
    "#Tất cả",
    "#data",
  ];
  return (
    <main className="flex flex-col justify-center items-center p-10 leading-relaxed bg-zinc-100 max-md:px-5">
      <header>
        <h1 className="self-stretch text-4xl uppercase font-bold text-center text-primary-blue-lighter max-md:max-w-full max-md:text-4xl">
          Blog
        </h1>
        <p className="mt-2 text-xl text-primary-blue-lighter">
          Chia sẻ kiến thức từ ICLS Tech
        </p>
      </header>
      <section className="flex flex-col items-center mt-5 max-w-full w-[844px]">
        <form className="flex flex-wrap gap-2.5 items-center px-4 py-2 max-w-full text-lg text-primary-blue bg-white border border-primary-blue border-solid h-max rounded-[40px] w-[664px] max-md:px-5">
          <Image
            src={assets.iconSearchBlue}
            alt="iconSearchBlue"
            width={30}
            height={30}
            className="m-auto"
            priority
          />
          <label htmlFor="searchInput" className="sr-only">
            Tìm kiếm
          </label>
          <input
            type="search"
            id="searchInput"
            placeholder="Tìm kiếm"
            className="self-stretch my-auto bg-transparent border-none outline-none flex-grow"
          />
        </form>
        <div className="flex flex-col justify-center mt-5 w-full text-lg text-center text-white max-w-[844px] max-md:max-w-full">
          <div className="flex flex-wrap gap-2 items-center justify-center w-full max-md:max-w-full">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="gap-2.5 self-stretch p-2 my-auto whitespace-nowrap bg-primary-blue-lighter border border-white border-solid rounded-full text-base"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogSearch;
