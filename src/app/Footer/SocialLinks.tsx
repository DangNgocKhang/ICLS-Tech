import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const SocialLinks: React.FC = () => {
  return (
    <div className="flex md:gap-8 items-center">
      <p className="self-stretch my-auto text-xl leading-relaxed text-white w-[243px]">
        Kết nối với chúng tôi tại:
      </p>
      <div className="flex gap-2 justify-between items-center self-stretch my-auto w-[105px]">
        <a href="#">
          <Image
            loading="lazy"
            height={31}
            width={30}
            src={assets.iconFB}
            alt="iconFB"
            className="w-full h-auto shrink-0"
          />
        </a>
        <a href="#">
          <Image
            loading="lazy"
            height={31}
            width={30}
            src={assets.iconTiktok}
            alt="iconTiktok"
            className="w-full h-auto shrink-0"
          />
        </a>
        <a href="#">
          <Image
            loading="lazy"
            height={31}
            width={30}
            src={assets.iconIns}
            alt="iconIns"
            className="w-full h-auto shrink-0"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
