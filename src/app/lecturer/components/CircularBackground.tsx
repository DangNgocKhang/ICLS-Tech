import { assets } from "@/assets/assets";
import Image from "next/image";

interface CircularBackgroundProps {
  title: string;
}

const CircularBackground: React.FC<CircularBackgroundProps> = ({ title }) => {
  return (
    <div className="h-[20dvh] md:h-[50dvh] xl:h-[75dvh]  overflow-hidden relative">
      <Image
        loading="lazy"
        height={554}
        width={1240}
        src={assets.bgCourse}
        alt="bgCourse"
        className="object-cover h-full w-full"
      />
      <h1 className="uppercase text-2xl md:text-6xl font-bold text-center text-white  absolute bottom-4 md:bottom-24 left-1/2 -translate-x-1/2">
        {title}
      </h1>
    </div>
  );
};

export default CircularBackground;
