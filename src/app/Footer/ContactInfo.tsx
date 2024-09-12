import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const ContactInfo: React.FC = () => {
  const contactDetails = [
    { icon: assets.iconPhone, text: "0396890308", alt: "Phone icon" },
    { icon: assets.iconMail, text: "contact@icls-tech.com", alt: "Email icon" },
    {
      icon: assets.iconLocation,
      text: "7F Charmvit Tower, Trung Hoà, Cầu Giấy, Hà Nội",
      alt: "Location icon",
    },
    { icon: assets.iconLink, text: "www.iclstechedu.vn", alt: "Website icon" },
  ];

  return (
    <div className="flex flex-col my-auto text-xl leading-relaxed text-white max-md:max-w-full ">
      <h2 className="text-base text-white max-md:max-w-full">
        Thông tin liên hệ
      </h2>
      <p className="self-start mt-1.5 text-center max-md:max-w-full">
        CÔNG TY CP GD & ĐT QUỐC TẾ I.C.L.S VIỆT NAM
      </p>
      {contactDetails.map((detail, index) => (
        <div
          key={index}
          className="flex gap-3 items-center mt-1.5 w-full  max-md:max-w-full"
        >
          <Image
            loading="lazy"
            height={24}
            width={24}
            src={detail.icon.src}
            alt={detail.alt}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="my-auto break-normal">{detail.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
