import { assets } from "@/assets/assets";

const contentItems = [
  {
    title: "Sự Tiên Phong",
    description: `Qua khoá học, Học viên có thể tham gia khoá học trực tiếp tại trung tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.`,
    imgSrc: assets.aboutCore.src,
    imgAlt: "iconTimeCircle",
  },
  {
    title: "Chất lượng vượt trội",
    description: `Chất lượng luôn là ưu tiên hàng đầu. Chúng tôi cam kết mang đến sự hài lòng tối đa cho học viên thông qua giảng dạy chất lượng, nội dung cập nhật và môi trường học tập hiện đại.`,
    imgSrc: assets.aboutCore.src,
    imgAlt: "iconTimeCircle",
  },
  {
    title: "Sự Đồng Hành Thấu Hiểu",
    description: `Chúng tôi hiểu rằng học viên cần sự hỗ trợ và đồng hành trong hành trình học tập. Chúng tôi đảm bảo sự thấu hiểu và hỗ trợ tận tâm, giúp học viên vượt qua mọi thách thức.`,
    imgSrc: assets.aboutCore.src,
    imgAlt: "iconTimeCircle",
  },
  {
    title: "Kết Nối Toàn Cầu",
    description: `Chúng tôi tạo cơ hội cho học viên tiếp xúc với các cơ hội việc làm và học hỏi từ các chuyên giavà doanh nghiệp trên khắp thế giới. Chúng tôi thúc đẩy kết nối toàn cầu để mở ra `,
    imgSrc: assets.aboutCore.src,
    imgAlt: "iconTimeCircle",
  },
];

const Core = () => {
  return (
    <div className="px-6 md:px-10 pt-10 md:pt-10 bg-primary-blue-lighter">
      <h1 className="text-4xl font-bold text-white max-md:max-w-full max-md:text-4xl text-center uppercase">
        Giá trị cốt lõi
      </h1>
      <div className="grid grid-cols-12 grid-auto-rows-fr mt-6 gap-5">
        {contentItems.map((item, index) => (
          <div
            key={index}
            className="col-span-full xl:col-span-3 h-full overflow-hidden p-5 w-full bg-white bg-opacity-25 border-2 rounded-3xl text-white flex flex-col gap-5"
          >
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-justify font-medium">{item.description}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src={item.imgSrc}
              alt={item.imgAlt}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Core;
