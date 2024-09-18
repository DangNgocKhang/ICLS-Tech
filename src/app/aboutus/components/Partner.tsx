import { assets } from "@/assets/assets";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="md:px-10 py-10 md:py-10 bg-white">
      <h1 className="text-4xl font-bold text-primary-blue-lighter max-md:max-w-full max-md:text-4xl text-center uppercase">
        đối tác
      </h1>
      <Image
        loading="lazy"
        src={assets.aboutPartner}
        height={10}
        width={1440}
        alt={`aboutPartner`}
        className="w-screen h-auto mt-4"
      />
    </div>
  );
};

export default Partner;
