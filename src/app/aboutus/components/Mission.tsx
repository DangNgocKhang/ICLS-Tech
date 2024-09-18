import { assets } from "@/assets/assets";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="px-6 md:px-10 pb-10 md:pb-20">
      <h1 className="text-4xl font-bold text-primary-blue-lighter max-md:max-w-full max-md:text-4xl text-left">
        SỨ MỆNH
      </h1>
      <p className="md:text-lg font-medium text-justify  max-md:max-w-full mt-3">
        Với tâm huyết từ những chuyên gia giáo dục uy tín cả trong nước và quốc
        tế, ICLS Tech xác lập sứ mệnh “Mang tri thức đến tương lai” nhằm trang
        bị những kiến thức và kỹ năng cần thiết như Phân tích dữ liệu, Fintech,
        Machine Learning/AI,.. Chúng tôi không chỉ là một tổ chức giáo dục mà
        còn là một cầu nối vững chắc, tận tâm dìu dắt học viên hội nhập vào dòng
        chảy công nghệ của thế giới, vươn tầm trong bức tranh toàn cầu. Trong
        hành trình định hướng tri thức và năng lực cho người Việt, ICLS Tech
        không chỉ đào tạo mà còn giúp học viên đón nhận mọi cơ hội làm việc
        trong tương lai.
      </p>
      <div className="mt-4 flex flex-col xl:flex-row">
        <div className="flex-1 my-auto xl:px-10 flex flex-col w-full md:w-8/12">
          <Image
            src={assets.logoICLS}
            alt="ICLS Tech"
            height={93}
            width={630}
            className="object-contain max-w-full aspect-[6.76] w-[430px] m-auto mb-5"
          />
          <div className="m-auto w-full md:w-4/12">
          <Image
            src={assets.aboutMission}
            alt="aboutICLS Tech"
            height={453}
            width={643}
            className="block md:hidden"
          />
        </div>
          <p className="md:text-lg font-medium text-justify  max-md:max-w-full mt-3  break-normal">
            Tiên phong mang tri thức của Cuộc cách mạng Công nghiệp 4.0 đến
            người Việt, Chúng tôi tin rằng cùng sự cống hiến và hỗ trợ từ đội
            ngũ của ICLS Tech sẽ thúc đẩy sự hội nhập và phát triển bền vững của
            người Việt trong Cuộc cách mạng công nghệ và kinh tế toàn cầu.
          </p>
        </div>
        <div className="m-auto w-full md:w-4/12">
          <Image
            src={assets.aboutMission}
            alt="aboutICLS Tech"
            height={453}
            width={643}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
