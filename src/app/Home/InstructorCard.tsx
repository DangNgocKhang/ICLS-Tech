import Image from "next/image";
import React from "react";

interface InstructorCardProps {
  name: string;
  image: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, image }) => {
  return (
    <article className=" xl:p-2.5 w-[calc(100vw-48px)] h-auto md:w-[280px] xl:w-[400px] shrink-0">
      <Image
        loading="lazy"
        src={image}
        height={346}
        width={400}
        alt={`Portrait of ${name}`}
        className="object-fill w-full rounded-xl overflow-hidden md:aspect-[1.39] max-md:max-w-full"
      />
      {/* Card detail when hover */}
      {/* <div className="  group-hover:cursor-pointer group-hover:visible invisible absolute h-full bg-white top-0 z-20">
              <SplitEffectWaveblue />
        <article className="py-7 flex flex-col justify-center px-3 bg-white rounded-xl min-w-[240px] w-full lg:w-[400px] max-md:max-w-full">
          <header className="gap-2.5 self-stretch p-1 w-full text-2xl font-semibold text-white bg-primary-blue shadow-register-blue-dark">
            Giảng viên
            <br />
            {name}
          </header>
          <section className="mt-3 text-base leading-5 text-black text-ellipsis">
            Tốt nghiệp Đaị học Bách khoa Hà Nội chuyên ngành Computer Science.
            <br />– Master Artificial Intelligence & MultiMedia tại Đại học La
            Rochelle <br />
            – Giảng viên chính trainning cho các tập đoàn lớn Viettel, VNPT,
            BIDV, VCB,.. <br />
            – Giảng viên tại Đại học Thủy Lợi, Hà Nội. <br />– Các sản phẩm
            nghiên cứu khoa học, đã có tên trên một số tạp chí lớn, uy tín
            Springer, Elsevier.,
          </section>
        </article>
              <SplitEffectWaveblue />

      </div> */}
    </article>
  );
};

export default InstructorCard;
