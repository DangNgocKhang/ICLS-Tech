import React from "react";
import ServiceCard from "./ServiceCard";

interface CustomerSectionProps {
  type: "personal" | "business";
}

const CustomerSection: React.FC<CustomerSectionProps> = ({ type }) => {
  const services = [
    {
      title: "Đào tạo Inhouse",
      description:
        "Học viên có thể tham gia khoá học trực tiếp tại trung tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea41e4b5ed6492963ab3f16a0f0ecf5055e42200668f5ff11caeff2b342ed1a?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913",
    },
    {
      title: "Liên kết đào tạo",
      description: "",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/126cd33543d05f72d3199b6146198b4e50425333fde3a8dc4154314947dc549f?placeholderIfAbsent=true&apiKey=77a2eed1e65849518c880e80afea0913",
    },
  ];

  return (
    <section className="flex flex-wrap gap-5 items-center mt-6 text-black max-md:max-w-full">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full max-md:max-w-full">
        <h2 className="text-4xl font-bold text-primary-blue-lighter max-md:max-w-full max-md:text-4xl">
          <span className="text-black">Đối với khách hàng</span>
          <br />
          {type === "personal" ? "CÁ NHÂN" : "DANH NGHIỆP"}
        </h2>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default CustomerSection;
