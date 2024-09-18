import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaCircleCheck } from "react-icons/fa6";
import AchievementCard from "./AchievementCard";
import Link from "next/link";
import ButtonPrimaryBlue from "../components/ButtonPrimaryBlue";

interface AboutICLSProps {}

const AboutICLS: React.FC<AboutICLSProps> = () => {
  const achievementsData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0f377c1bb784c6aa14deab1190f298dc1192c3d676f1300749acb116a16d533?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913",
      count: "22+",
      description: "Công ty hợp tác đào tạo giảng dạy",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7dd973459f1be01270985a2b806cb30ec9fcffe0ac9fea3bd7403b1af8774be?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913",
      count: "40+",
      description: "Khoá học chính thức được khai giảng",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d7c2a1d8a8216c6bca7b6e3747f7a9e045e4b631075ef5431a2741700b98aa2?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913",
      count: "1.5K",
      description: "Học viên được đào tạo từ chương trình",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec841e57b696267d9c803bb94a0d48cc86d3fb7b7849eacd345c69fa73938f2f?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913",
      count: ">95%",
      description: "Học viên phản hồi tốt về chương trình",
    },
  ];
  return (
    <>
      <main className="flex gap-5 max-md:flex-col pt-4  md:px-10 md:py-10">
        <section className="px-6 flex flex-col w-full md:px-10 lg:px-0 lg:w-8/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto -mr-12 max-md:max-w-full">
            <div className="flex flex-col self-stretch max-md:max-w-full">
              <h1 className="text-4xl font-bold text-primary-blue-lighter max-md:max-w-full">
                Về ICLS Tech
              </h1>
              <p className="mt-3 text-sm  md:text-lg md:leading-8 text-justify  max-md:max-w-full tracking-tight md:tracking-normal">
                ICLS Việt Nam là một tổ chức giáo dục được thành lập bởi các{" "}
                <strong className="font-semibold text-primary-blue-lighter">
                  chuyên gia Việt Nam và chuyên gia nước ngoài đến từ Mỹ, Úc,
                  Hàn, Nhật, New Zealand từ năm 2010 với 13 năm kinh nghiệm
                </strong>{" "}
                và uy tín về giảng dạy kiến thức công nghệ, kinh tế. ICLS Việt
                Nam luôn mong muốn đưa tri thức của người Việt vươn ra thế giới
                bằng chất lượng giáo dục đạt chuẩn Quốc tế.
              </p>
            </div>
            <Image
              src={assets.logoICLS}
              alt="ICLS Tech"
              height={93}
              width={330}
              className="object-contain my-3 w-[250px] md:w-[300px] self-center md:self-start"
            />

            <p className="self-stretch mt-0 text-sm  md:text-lg md:leading-8 text-black max-md:mt-0 max-md:mr-2.5 max-md:max-w-full text-justify tracking-tight md:tracking-normal">
              Nắm bắt được xu hướng chuyển đổi số mạnh mẽ của thế giới trong
              những năm gần đây, năm 2023, ICLS Tech được ra đời với sứ mệnh
              trang bị những kiến thức và kỹ năng cần thiết như:
              <br />
              <span>
                <FaCircleCheck className="w-6 h-6 text-primary-blue-lighter inline mr-2" />
                Phân tích dữ liệu (Data Analysis), FinTech, Machine
                Learning/AI,… nhằm giúp người Việt hội nhập vào dòng chảy công
                nghệ của thế giới.
              </span>
              <br />
              <FaCircleCheck className="w-6 h-6 text-primary-blue-lighter inline mr-2" />
              <span>
                Nâng cao thu nhập và có thể làm việc tại các công ty công nghệ
                nước ngoài.
              </span>
            </p>
            <Link href={"aboutus"}>
              <ButtonPrimaryBlue value={"ĐỌC THÊM"} stylElement="mt-2 md:mt-8"/>
            </Link>
          </div>
        </section>
        <section className="flex md:hidden lg:flex items-center justify-center ml-5 w-4/12 max-md:ml-0 max-md:w-full">
          <Image
            src={assets.aboutICLS}
            alt="aboutICLS Tech"
            height={1000}
            width={800}
            className=""
          />
        </section>
      </main>
      <section className="flex flex-col p-10 max-md:px-5">
        <h1 className="self-center text-4xl font-bold text-center text-primary-blue-lighter max-md:max-w-full max-md:text-4xl">
          Thành tựu ấn tượng
        </h1>
        <div className="grid grid-cols-12 gap-5 items-center mt-3 w-full">
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              count={achievement.count}
              description={achievement.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutICLS;
