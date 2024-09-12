import Link from "next/link";
import { assets } from "../../assets/assets";
import Navigate from "./Navigate";
import Image from "next/image";

const Header = () => {
  return (
    <div className="absolute top-11 h-[100px] w-full flex items-center z-50">
      <div className="h-full w-10/12 bg-primary-blue-lighter p-4 flex items-center shrink-0">
        <Link
          href="/"
          className="bg-white h-full w-44 flex justify-center items-center rounded-3xl px-2"
        >
          <Image src={assets.logoICLS} alt="logoICLS" width={170} height={60} />
        </Link>
        <div className="flex-1 flex flex-wrap justify-evenly items-center text-xl font-bold text-white">
          <Navigate
            colorVisit="underline underline-offset-8"
            colorNoneVisit="no-underline"
          />
        </div>
        <div className="h-full aspect-square flex">
          <Image
            src={assets.iconSearch}
            alt="iconSearch"
            width={30}
            height={30}
            className="m-auto"
            priority
          />
        </div>
      </div>
      <div className="h-full w-3/12 py-3 px-5 hover:cursor-pointer">
        <div className="h-full w-full bg-white flex flex-col justify-center items-center text-xl text-primary-blue-lighter font-bold shadow-register">
          <span>ĐĂNG KÝ</span>
          <div className="w-3/4 h-[3px] bg-primary-blue-lighter"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
