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
      <div className="flex flex-col gap-4 uppercase font-bold text-center text-white  absolute bottom-4 xl:bottom-20 left-1/2 -translate-x-1/2">
        <h3 className="text-xl xl:text-4xl">KHÓA HỌC</h3>
        <h1 className="text-2xl xl:text-5xl ">{title}</h1>
      </div>
    </div>
  );
};

export default CircularBackground;
