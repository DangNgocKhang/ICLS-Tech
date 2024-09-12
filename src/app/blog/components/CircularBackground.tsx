import { assets } from "@/assets/assets";
import Image from "next/image";

const CircularBackground: React.FC = () => {
  return (
    <div className="h-[20dvh] md:h-[50dvh] xl:h-[85dvh] overflow-hidden relative">
      <Image
        loading="lazy"
        height={554}
        width={1240}
        src={assets.bgBlog}
        alt="bgBlog"
        className="object-cover h-full w-full"
      />
      <div className="invisible sm:visible w-full h-full md:h-max z-20 px-6 absolute bottom-6 flex justify-center items-center">
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
            Blog nổi bật
          </h2>
          <div className="flex flex-col text-white gap-5">
            <div className="flex">
              <Image
                loading="lazy"
                height={24}
                width={24}
                src={assets.iconTimeCircle}
                alt="iconTimeCircle"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square mr-2"
              />
              <span>10 phút đọc</span>
            </div>
            <h2 className="text-4xl font-bold text-white max-md:max-w-full max-md:text-4xl">
              Học tập hiệu quả với phương pháp tự điều chỉnh
            </h2>

            <div className=" w-[210px]  hover:cursor-pointer">
              <div className="h-full w-full py-6 bg-white flex flex-col justify-center items-center text-xl text-primary-blue-lighter font-bold shadow-register">
                <span>ĐỌC NGAY</span>
                <div className="w-3/4 h-[3px] bg-primary-blue-lighter"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <Image
            loading="lazy"
            height={453}
            width={690}
            src={assets.imageBlogHeader}
            alt="bgBlog"
            className=" w-3/5 lg:w-2/3 xl:w-4/5 h-auto m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CircularBackground;
