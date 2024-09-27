import { assets } from "@/assets/assets";
import LearningPathCard from "./LearningPathCard";

const LearningPath = () => {
  const learningPathData = [
    {
      title: "Python Foundation",
      desc: "Python là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất hiện nay, tích hợp nhiều công cụ hữu ích.",
      image: assets.pythonFoundation.src,
      numberImage: assets.num01.src,
      path: "/khoa-hoc/Python-Foundation",
    },
    {
      title: "Algo Trade Foundation 101",
      desc: "Kiến thức nền tảng về giao dịch tự động (Algorithmic Trading), giúp hiểu rõ cách thức hoạt động và ứng dụng các thuật toán.",
      image: assets.algoTradeCoban.src,
      numberImage: assets.num02.src,
      path: "/khoa-hoc/khoa-hoc-algorithmic-trading-machine-learning-co-ban-101",
    },
    {
      title: "Algo Trade Advanced 201",
      desc: "Kiến thức cơ bản về giao dịch tự động và muốn khám phá các chiến lược phức tạp hơn và kỹ thuật nâng cao.",
      image: assets.algoTradeNangcao.src,
      numberImage: assets.num03.src,
      path: "/khoa-hoc/khoa-hoc-algorithmic-trading-machine-learning-foundation-201",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center px-6 md:px-10">
      <h1 className="text-4xl font-bold text-center text-primary-blue-lighter max-md:max-w-full max-md:text-4xl mb-6">
        Lộ trình học tập
      </h1>
      <div className="h-1 w-2/3 bg-primary-gray-th1 hidden md:flex justify-between items-center">
        <span className="h-4 aspect-square rounded-full bg-primary-blue-lighter"></span>
        <span className="h-4 aspect-square rounded-full bg-primary-blue-lighter"></span>
        <span className="h-4 aspect-square rounded-full bg-primary-blue-lighter"></span>
      </div>
      <div className="flex flex-row md:mt-6 gap-6 lg:gap-20 w-screen md:w-auto overflow-x-auto hidden-scrolling pb-4 md:pb-2">
        {learningPathData.map((data, index) => (
          <LearningPathCard
            key={index}
            title={data.title}
            desc={data.desc}
            image={data.image}
            numberImage={data.numberImage}
            path={data.path}
          />
        ))}
      </div>
    </main>
  );
};

export default LearningPath;
