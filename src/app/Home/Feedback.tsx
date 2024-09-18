import { assets } from "@/assets/assets";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { useRef } from "react";

interface FeedbackFromStudent {
  name: string;
  course: string;
  testimonial: string;
  rating: number;
}

const Feedback = () => {
  const feedback: FeedbackFromStudent[] = [
    {
      name: "Phùng Ngọc An",
      course: "Học viên khoá học Algo trade cơ bản 101",
      testimonial:
        "Mình từng nghĩ rằng không học chuyên về tài chính, kinh tế hay ngôn ngữ lập trình sẽ rất khó tiếp thu vì cơ bản mình chưa biết về những định nghĩa này, khi đến với ICLS Tech mình thay đổi lối suy nghĩ hoàn toàn.",
      rating: 5,
    },
    {
      name: "THUỲ TRANG",
      course: "Học viên khoá học Algo trade cơ bản 101",
      testimonial:
        "Khoá học Algo Trade 101 cơ bản của ICLS Tech đã mang lại cho mình rất nhiều kiến thức hữu ích về giao dịch tự động. Giảng viên siêu nhiệt tình và có kiến thức sâu rộng, giúp mình dễ dàng nắm bắt các khái niệm cơ bản.",
      rating: 5,
    },
    {
      name: "Phùng Ngọc An",
      course: "Học viên khoá học Algo trade cơ bản 101",
      testimonial:
        "Qua khoá học, Học viên có thể tham gia khoá học trực tiếp tại trung tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.",
      rating: 5,
    },

    {
      name: "Phùng Ngọc An",
      course: "Học viên khoá học Algo trade cơ bản 101",
      testimonial:
        "Qua khoá học, Học viên có thể tham gia khoá học trực tiếp tại trung tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.",
      rating: 5,
    },
    {
      name: "Phùng Ngọc An",
      course: "Học viên khoá học Algo trade cơ bản 101",
      testimonial:
        "Qua khoá học, Học viên có thể tham gia khoá học trực tiếp tại trung tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.",
      rating: 5,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        window.innerWidth <= 640
          ? window.innerWidth - 24
          : window.innerWidth * 0.5; // Scroll by 50% of the screen width
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        window.innerWidth <= 640
          ? window.innerWidth - 24
          : window.innerWidth * 0.5; // Scroll by 50% of the screen width
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + scrollAmount,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  return (
    <div className="px-6 md:px-10">
      <h1 className="text-4xl font-bold text-primary-blue-lighter mb-6 text-center">
        Feedback từ học viên
      </h1>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto hidden-scrolling"
      >
        {feedback.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            course={item.course}
            testimonial={item.testimonial}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 gap-16">
        <Image
          src={assets.preBlueButton}
          height={60}
          width={60}
          alt={`preBlueButton`}
          onClick={handleScrollLeft}
          className="cursor-pointer"
        />

        <Image
          src={assets.nextBlueButton}
          height={60}
          width={60}
          alt={`nextBlueButton`}
          onClick={handleScrollRight}
          className="cursor-pointer"
        />
      </div>
      <Image
        loading="lazy"
        src={assets.effectPoint}
        height={321}
        width={1440}
        alt="effectPoint"
        className="w-screen max-md:max-w-full"
      />
    </div>
  );
};

export default Feedback;
