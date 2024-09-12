import React from "react";
import CourseCard from "./CourseCard";

const CourseCardList: React.FC = () => {
  const courseData = [
    {
      path: "course/Algo-Trade-101",
      title: "Khoá học Algo Trade 101 cơ bản",
      description:
        "Khóa học này được thiết kế cho những người quan tâm đến việc nắm vững kiến thức của giao dịch thuật toán bằng cách sử dụng ngôn ngữ lập trình Python và Colab notebook.",
    },
    {
      path: "course/Algo-Trade-201",
      title: "Khoá học Algo Trade 201 Nâng cao",
      description:
        "Khóa học này được thiết kế dành cho các chuyên gia tài chính, nhà phân tích định lượng và cá nhân muốn có hiểu biết sâu sắc về toán học đằng sau mô hình tài chính trong các khái niệm giao dịch thuật toán.",
    },
    {
      path: "course/Fintech",
      title: "Khoá học Fintech - Công nghệ tài chính",
      description:
        "Khóa học giúp trang bị các kiến thức tài chính tương đương với các lớp Financial Markets trong chương trình MBA tài chính trên thế giới, các kiến thức và công cụ thực tiễn trong chương trình CFA",
    },
  ];

  return (
    <main className=" bg-primary-blue-lighter px-6 py-10 md:px-10 md:py-20">
      <div className="flex flex-col justify-center items-center text-center mb-6 text-white">
        <h1 className="self-center -mt-2 text-6xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
          Khoá học nổi bật của ICLS Tech
        </h1>
        <p className="text-xl">
          Các khoá học của chúng tôi không chỉ truyền tải kiến thức mà còn hướng
          dẫn học viên áp dụng ngay vào thực tế, đảm bảo tính ứng dụng thực tiễn
          cao trong công việc
        </p>
      </div>
      <div className="grid grid-cols-12 text-center text-white place-items-center gap-4 xl:gap-28">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            path={course.path}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </main>
  );
};

export default CourseCardList;
