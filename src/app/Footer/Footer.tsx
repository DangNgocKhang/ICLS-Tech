import React from "react";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden relative flex-col px-10 py-4 w-full h-max max-md:px-5 max-md:max-w-full bg-gradient-to-t md:bg-gradient-to-l from-primary-blue to-primary-blue-lighter">
      <div className="flex flex-col md:flex-row relative gap-5 justify-between items-center max-md:mr-1.5 max-md:max-w-full">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col justify-center max-w-full bg-white rounded-3xl min-h-[60px] w-[170px]">
            <Image
              loading="lazy"
              src={assets.logoICLS}
              alt="ICLS Education Logo"
              className="object-contain w-full "
            />
          </div>
          <p className="mt-5 text-xl leading-8 text-white max-md:max-w-full">
            Bridging the gap, Embracing the future!
            <br />
            ICLS Education đã được thành lập từ năm 2010 bởi một đội ngũ chuyên
            gia đến từ cả Việt Nam và các quốc gia nước ngoài như Mỹ, Úc, Hàn
            Quốc, Nhật Bản, và New Zealand.
          </p>
          <form className="flex md:gap-6 px-2.5 py-1 mt-5 w-full text-xl bg-white shadow-sm max-w-[578px] min-h-[63px] rounded-[50px] max-md:max-w-full overflow-hidden focus:ring-0">
            <label htmlFor="emailInput" className="sr-only">
              Điền thông tin email
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Điền thông tin email"
              className="flex-1 shrink leading-8 text-gray-400 basis-[78px] focus:outline-none"
              aria-label="Điền thông tin email của bạn"
            />
            <button
              type="submit"
              className="gap-2.5 self-stretch px-4 xl:px-10 py-1 xl:py-3 h-max m-auto leading-relaxed text-center text-white bg-primary-blue-lighter shadow-lg rounded-[50px] max-md:px-5"
            >
              GỬI
            </button>
          </form>
        </div>
        <div className="flex flex-col flex-1 max-w-[90dvw]">
          <ContactInfo />
        </div>
      </div>
      <div className="flex relative flex-wrap gap-5 justify-between mt-6 w-full max-md:max-w-full">
        <p className="my-auto text-base leading-tight text-white">
          © 2024 All Rights Reserved
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
