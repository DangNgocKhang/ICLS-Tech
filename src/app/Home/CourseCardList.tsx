import React from "react";
import CourseCard from "./CourseCard";

const CourseCardList: React.FC = () => {
  const courseData = [
    {
      path: "course/Algo-Trade-101",
      title: "Khoá học Algorithmic Trading & Machine Learning Cơ Bản 101",
    },
    {
      path: "course/Algo-Trade-201",
      title: "Khoá học Algorithmic Trading & Machine Learning Nâng cao 201",
    },
    {
      path: "course/Fintech",
      title: "Khoá học Fintech - Công nghệ tài chính",
    },
    {
      path: "course/Python-Foundation",
      title: "Khoá học ngôn ngữ lập trình Python Foundation",
    },
  ];

  return (
    <main className=" bg-primary-blue-lighter py-10 md:px-10 md:py-10">
      <div className="flex flex-col justify-center items-center text-center mb-6 text-white">
        <h1 className="mt-10 self-center text-4xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
          Khoá học nổi bật của ICLS Tech
        </h1>
        <p className="md:text-lg mt-4 px-6 tracking-tight	font-light	">
          Các khoá học của chúng tôi không chỉ truyền tải kiến thức mà còn hướng
          dẫn học viên áp dụng ngay vào thực tế, đảm bảo tính ứng dụng thực tiễn
          cao trong công việc
        </p>
      </div>
      <div className="grid grid-cols-12 text-center text-white place-items-center gap-4 px-6 ">
        {courseData.map((course, index) => (
          <CourseCard key={index} path={course.path} title={course.title} />
        ))}
      </div>
    </main>
  );
};

export default CourseCardList;
