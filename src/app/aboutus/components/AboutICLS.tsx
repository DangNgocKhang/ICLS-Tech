import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaCircleCheck } from "react-icons/fa6";

interface AboutICLSProps {}

const AboutICLS: React.FC<AboutICLSProps> = () => {
  return (
    <div className="px-6 md:px-10 pt-10 md:pt-20">
      <h1 className="text-4xl font-bold text-primary-blue-lighter max-md:max-w-full max-md:text-4xl text-center">
        GIỚI THIỆU CHUNG VỀ ICLS TECH
      </h1>
      <main className="flex gap-5 max-md:flex-col mt-8">
        <section className="hidden lg:flex flex-col justify-start ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Image
            src={assets.aboutICLS_2}
            alt="aboutICLS Tech"
            height={1000}
            width={800}
            className=""
          />
        </section>
        <section className="flex flex-col w-full md:px-10 lg:px-0 lg:w-6/12 max-md:ml-0 max-md:w-full=">
          <div className="flex flex-col items-start self-stretch  max-md:mt-10 max-md:max-w-full">
            <Image
              src={assets.logoICLS}
              alt="ICLS Tech"
              height={93}
              width={630}
              className="object-contain max-w-full aspect-[6.76] w-[630px] mb-5"
            />
            <div className="flex flex-col self-stretch max-md:max-w-full gap-3">
              <strong className="font-bold text-primary-blue-lighter uppercase text-lg">
                Về chúng tôi
              </strong>
              <p className="text-lg leading-8 text-justify  max-md:max-w-full">
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
            <p className="self-stretch mt-0 text-lg leading-8 text-black max-md:mt-0 max-md:mr-2.5 max-md:max-w-full text-justify">
              Nắm bắt được xu hướng chuyển đổi số mạnh mẽ của thế giới trong
              những năm gần đây, năm 2023, ICLS Tech được ra đời với sứ mệnh
              trang bị những kiến thức và kỹ năng cần thiết như Phân tích dữ
              liệu (Data Analysis), FinTech, Machine Learning/AI,… nhằm giúp
              người Việt hội nhập vào dòng chảy công nghệ của thế giới, nâng cao
              thu nhập và có thể làm việc tại các công ty công nghệ nước ngoài.
              <br />
              <span>
                <FaCircleCheck className="w-6 h-6 text-primary-blue-lighter inline mr-2" />
                Các khóa học tại ICLS Tech được cố vấn chuyên môn bởi các chuyên
                gia nước ngoài uy tín về công nghệ, đã có kinh nghiệm quản lý
                tại các công ty lớn trên thế giới.
              </span>
              <br />
              <FaCircleCheck className="w-6 h-6 text-primary-blue-lighter inline mr-2" />
              <span>
                Những giáo viên trực tiếp giảng dạy là những người có chuyên môn
                tốt, có nhiều kinh nghiệm thực tiễn ở những doanh nghiệp lớn
                cùng kinh nghiệm sư phạm.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutICLS;
