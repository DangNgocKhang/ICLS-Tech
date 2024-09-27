"use client"

import CircularBackground from "@/app/components/CircularBackground";
import { useState, useEffect } from "react";

interface CourseHeaderProps {
  title: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title }) => {
  const [courseId, setCourseId] = useState<string>("");

  useEffect(() => {
    switch (title) {
      case "Algo-Trade-101":
        setCourseId("Algo Trade 101 cơ bản");
        break;
      case "Algo-Trade-201":
        setCourseId("Algo Trade 201 Nâng cao");
        break;
      case "Fintech":
        setCourseId("Fintech - Công nghệ tài chính");
        break;
      case "Python-Foundation":
        setCourseId("Python Foundation");
        break;
    }
  }, [title]);
  return (
    <div>
      <CircularBackground title={courseId} typePage={"course"} />
      <h1 className="visible md:hidden self-center text-2xl md:text-3xl font-bold text-center text-primary-blue-lighter flex flex-col mt-4">
        <span>Khóa học </span>
        {courseId}
      </h1>
    </div>
  );
};

export default CourseHeader;
