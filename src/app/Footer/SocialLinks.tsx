import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const SocialLinks: React.FC = () => {
  return (
    <div className="flex md:gap-2 items-center">
      <p className="self-stretch my-auto text-lg leading-relaxed text-white">
        Kết nối với chúng tôi tại:
      </p>
      <div className="flex gap-2 justify-between items-center self-stretch my-auto w-[105px]">
        <a href="#">
          <Image
            loading="lazy"
            height={20}
            width={20}
            src={assets.iconFB}
            alt="iconFB"
            className="w-full h-auto shrink-0"
          />
        </a>
        <a href="#">
          <Image
            loading="lazy"
            height={20}
            width={20}
            src={assets.iconTiktok}
            alt="iconTiktok"
            className="w-full h-auto shrink-0"
          />
        </a>
        <a href="#">
          <Image
            loading="lazy"
            height={20}
            width={20}
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
