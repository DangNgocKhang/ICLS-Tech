import { generateMetadataWebsite } from "@/utils/SEO";
import {
  SplitEffectPoint,
  SplitEffectWaveblue,
} from "./components/SplitEffect";
import AboutICLS from "./Home/AboutICLS";
import Banner from "./Home/Banner";
import BlogSharing from "./Home/BlogSharing";
import CourseCardList from "./Home/CourseCardList";
import CustomerService from "./Home/CustomerService";
import Feedback from "./Home/Feedback";
import ImageIntroduce from "./Home/ImageIntroduce";
import InstructorTeam from "./Home/InstructorTeam";
import LearningPath from "./Home/LearningPath";

export const metadata = generateMetadataWebsite({
  title: "ICLS TECH",
  description:
    "ICLS Việt Nam là một tổ chức giáo dục được thành lập bởi các chuyên gia Việt Nam và chuyên gia nước ngoài đến từ Mỹ, Úc, Hàn, Nhật, New Zealand từ năm 2010 với 13 năm kinh nghiệm và uy tín về giảng dạy kiến thức công nghệ, kinh tế.",
  url: "https://iclstech.edu.vn",
  keywords: [
    "Khóa học quant trading cho người mới bắt đầu",
    "Đào tạo algorithmic trading từ cơ bản đến nâng cao",
    "Khóa học về chiến lược giao dịch định lượng",
    "Học cách phát triển hệ thống giao dịch tự động",
    "Khóa học ứng dụng machine learning trong trading",
    "Khóa học phân tích dữ liệu cho giao dịch tài chính",
    "Học lập trình Python cho algorithmic trading",
    "Khóa học tối ưu hóa chiến lược giao dịch",
    "Đào tạo về quản lý rủi ro trong quant trading",
    "Khóa học về kỹ thuật backtesting trong trading",
    "Học cách xây dựng mô hình tài chính cho trading",
    "Khóa học sử dụng API trong algorithmic trading",
    "Khóa học phân tích thị trường tài chính bằng dữ liệu lớn",
    "Đào tạo về các công cụ giao dịch tự động",
    "Khóa học phát triển bot giao dịch",
    "Học về kỹ thuật phân tích thống kê trong trading",
    "Khóa học về trading psychology và quyết định đầu tư",
    "Khóa học ứng dụng thuật toán trong thị trường tài chính",
    "Học cách sử dụng phần mềm trading chuyên nghiệp",
    "Khóa học về giao dịch cryptocurrency bằng quant trading",
  ],
  imageUrl: "/logoICLS.png",
  author: "ICLS TECH",
  twitterHandle: "@iclstech",
});

export default function Home() {
  return (
    <>
      <div className="relative overflow-y-auto overflow-hidden">
        <Banner />
        <AboutICLS />
        <InstructorTeam />
        <CourseCardList />
        <CustomerService />
        <SplitEffectWaveblue />
        <LearningPath />
        <SplitEffectWaveblue />
        <Feedback />
        <SplitEffectPoint />
        <BlogSharing />
        <SplitEffectPoint />
        <ImageIntroduce />
      </div>
    </>
  );
}
