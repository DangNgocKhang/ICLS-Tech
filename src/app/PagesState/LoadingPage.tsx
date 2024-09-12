import { assets } from "../../assets/assets";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen bg-white flex z-[100]">
      <Image
        src={assets.logoICLS}
        alt="logoICLS"
        height={1080}
        width={1920}
        className="w-3/4 lg:w-auto h-auto lg:h-1/2 m-auto"
        priority
      />
    </div>
  );
};

export default LoadingPage;
