import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  course: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  course,
  testimonial,
  rating,
}) => {
  return (
    <article className="flex flex-col justify-center px-2.5 md:px-5 py-4 md:py-10 bg-primary-blue-lighter border border-solid shadow-sm border-white border-opacity-20 w-full md:w-8/12 xl:w-6/12 rounded-bl-3xl shrink-0">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <div className="flex flex-1 gap-2 md:gap-4 rounded-tr-3xl overflow-hidden">
          <div className="flex flex-col justify-between self-stretch">
            <div className="flex gap-1 items-start">
              {[...Array(5)].map((_, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/80c67555efa07987cb701ba8bb0b791fb5a5b11c7fde467a553be26084ee77ca?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913"
                  alt={index < rating ? "Filled star" : "Empty star"}
                  className="object-contain shrink-0 w-4 aspect-square"
                />
              ))}
            </div>
            <div className="flex gap-1.5 px-1 py-0.5 mt-4 min-h-[40px] w-[51px]">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64165129e539964b3eeecbd21dac7e516bbee7cc1397cb431aafd8d966a8a95?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913"
                  alt="Social icon 1"
                  className="object-contain flex-1 shrink aspect-[0.53] basis-0 w-[19px]"
                />
              }
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5c7bd7190c832ef9a746f736651ba3f390afbe4c421ca4326cfe67d7bcaf06?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913"
                  alt="Social icon 2"
                  className="object-contain flex-1 shrink aspect-[0.5] basis-0 w-[18px]"
                />
              }
            </div>
          </div>
          <div className="tracking-tighter first-letter:flex flex-col flex-1 shrink self-stretch my-auto text-sm md:text-lg text-right md:min-w-[240px]">
            <h2 className="font-semibold md:font-bold text-white uppercase">
              {name}
            </h2>
            <p className="mt-2.5 text-white text-xs">{course}</p>
          </div>
          <Image
            loading="lazy"
            src={assets.girl}
            alt="avatar"
            className=" object-cover shrink-0 self-stretch my-auto aspect-[0.77] w-[60px] md:w-[85px]"
          />
        </div>
      </div>
      <p className="mt-3 md:text-lg text-white max-md:max-w-full text-justify">
        {testimonial}
      </p>
    </article>
  );
};

export default TestimonialCard;
