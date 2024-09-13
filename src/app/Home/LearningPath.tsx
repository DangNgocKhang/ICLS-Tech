import { assets } from "@/assets/assets";
import Image from "next/image";
import LearningPathCard from "./LearningPathCard";

const LearningPath = () => {
  const learningPathData = [
    {
      title: "Khoá học Python Foundation",
      desc: "Python là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất hiện nay, tích hợp nhiều công cụ hữu ích.",
      image: assets.pythonFoundation.src,
      path: "/course/Python-Foundation",
    },
    {
      title: "Khoá học Algo Trade 101 cơ bản",
      desc: "Khóa học này được thiết kế cho những người quan tâm đến việc nắm vững kiến thức của giao dịch thuật toán bằng cách sử dụng ngôn ngữ lập trình Python và Colab notebook.",
      image: assets.pythonFoundation.src,
      path: "/course/Algo-Trade-101",
    },
    {
      title: "Algo Trade 201 Nâng cao",
      desc: "Khóa học này được thiết kế dành cho các chuyên gia tài chính, nhà phân tích định lượng và cá nhân muốn có hiểu biết sâu sắc về toán học đằng sau mô hình tài chính trong các khái niệm giao dịch thuật toán.",
      image: assets.pythonFoundation.src,
      path: "/course/Algo-Trade-201",
    },
  ];

  return (
    <>
      <main className="flex flex-col  justify-center items-center px-6 md:px-10">
        <h1 className="text-4xl font-bold uppercase text-center text-primary-blue-lighter max-md:max-w-full max-md:text-4xl mb-6">
          Lộ trình học tập
        </h1>
        <div className="h-1 w-2/3 bg-primary-gray-th1 flex justify-between items-center">
          <span className="h-4 aspect-square rounded-full bg-primary-blue-lighter"></span>
          <span className="h-4 aspect-square rounded-full bg-primary-blue-lighter"></span>
          <span className="h-4 aspect-square rounded-full bg-primary-blue-lighter"></span>
        </div>
        <div className="flex flex-col md:flex-row mt-6 gap-6 lg:gap-24">
          {learningPathData.map((data, index) => (
            <LearningPathCard
              key={index}
              title={data.title}
              desc={data.desc}
              image={data.image}
              path={data.path}
            />
          ))}
        </div>
      </main>
      <Image
        loading="lazy"
        src={assets.effectWaveBlue}
        height={678}
        width={711}
        alt="effectWaveBlue"
        className="w-screen max-md:max-w-full"
      />
    </>
  );
};

export default LearningPath;
