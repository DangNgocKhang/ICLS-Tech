"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CircularBackgroundProps {
  typePage?: string;
  title: string;
}

const CircularBackground: React.FC<CircularBackgroundProps> = ({
  typePage,
  title,
}) => {
  const images = [assets.bgCourse1, assets.bgCourse2, assets.bgCourse3];

  // This is the loop sequence: [1, 2, 3, 2, 1, 2, 3, ...]
  const sequence = [0, 1, 2, 1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    }, 800); // Change image every 800ms

    // Clean up interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [sequence.length]);

  return (
    <div className="h-[20vh] md:h-[50vh] xl:h-[60vh]  overflow-hidden relative">
      <Image
        loading="lazy"
        height={554}
        width={1240}
        src={images[sequence[currentImageIndex]]}
        alt={`bgCourse${sequence[currentImageIndex] + 1}`}
        className="object-cover h-full w-full transition-all duration-[600ms] ease-in-out"
      />
      <div className="w-3/4 flex flex-col gap-4 uppercase font-bold text-center text-white absolute bottom-4 md:bottom-20 left-1/2 -translate-x-1/2">
        {typePage && typePage === "course" && (
          <h3 className="hidden md:block text-2xl xl:text-4xl">KHÓA HỌC</h3>
        )}
        <h1 className="text-xl md:text-5xl">{title}</h1>
      </div>
    </div>
  );
};

export default CircularBackground;
