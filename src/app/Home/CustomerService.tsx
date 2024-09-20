import React from "react";
import CustomerSection from "./CustomerSection";
import { assets } from "@/assets/assets";
import Image from "next/image";

const CustomerService: React.FC = () => {
  return (
    <main className="flex flex-col  md:px-10 pt-10 ">
      <h1 className="self-center -mt-2 text-4xl font-bold text-center text-primary-blue-lighter max-md:max-w-full max-md:text-4xl mb-6">
        Đa dạng hình thức học tập
      </h1>
      <div className="w-full max-md:max-w-full flex flex-col gap-6 px-6">
        <div className="flex gap-5 max-md:flex-col-reverse justify-center items-center">
          <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src={assets.rectangle18}
              height={678}
              width={711}
              alt="Personal customer illustration"
              className="object-contain grow w-full aspect-[1.05] max-md:max-w-full m-auto"
            />
          </div>
          <div className="flex justify-center flex-col ml-5 w-full lg:w-8/12 max-md:ml-0 max-md:w-full">
            <CustomerSection type="personal" />
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-col justify-center items-center">
          <div className="flex justify-center flex-col ml-5 w-full lg:w-8/12 max-md:ml-0 max-md:w-full">
            <CustomerSection type="business" />
          </div>
          <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src={assets.rectangle18}
              height={678}
              width={711}
              alt="Personal customer illustration"
              className="object-contain grow w-full aspect-[1.05] max-md:max-w-full m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomerService;
