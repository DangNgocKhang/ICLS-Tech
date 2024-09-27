// components/layouts/FintechLayout.tsx
import { ReactNode } from "react";
import TargetStudent from "../TargetStudent";
import CourseObjective from "../CourseObjective";
import CourseBenefit from "../CourseBenefit";
import Seo from "@/app/Seo";

interface LayoutProps {
  children: ReactNode;
}
interface Objective {
  title: string;
  items: string[];
}
const FintechLayout = ({ children }: LayoutProps) => {
  const listTarget: string[] = [
    "Có đam mê học hỏi đầu tư chứng khoán, bất động sản, giao dịch tài chính, chứng khoán và công nghệ tài chính (FinTech)",
    "Sinh viên có hứng thú với khởi nghiệp, FinTech, có định hướng làm Financial Analyst, Investment Banking, Business Analyst trong ngân hàng, công ty chứng khoán, quỹ đầu tư",
    "Sinh viên có mong muốn được học hỏi và làm việc trong các start-up công nghệ, được kết nối với các nhà quản trị doanh nghiệp và founder các start-up",
    "Học viên có kế hoạch hoặc mong muốn khởi nghiệp công nghệ và các nhà quản trị doanh nghiệp, nhà khởi nghiệp công nghệ,...",
    "Nhà đầu tư tài chính, các cố vấn đầu tư của tổ chức tài chính, quản lý quỹ đầu tư, nhà môi giới, nhà nghiên cứu thị trường,…",
  ];

  const listObjective: Objective[] = [
    {
      title: "",
      items: [
        "Trang bị các kiến thức tài chính tương đương với các lớp Financial Markets trong chương trình MBA tài chính trên thế giới, các kiến thức và công cụ thực tiễn trong chương trình CFA I",
        "Cập nhật và bổ sung những thay đổi trong môi trường tài chính quốc tế, Việt Nam qua sự phát triển công nghệ trong những năm gần đây",
        "Các kiến thức về bản chất và giá trị của tiền tệ trong xã hội, qua đó nhận biết những cơ hội đầu tư, kinh doanh bằng các công nghệ mới.",
        "Trang bị kiến thức, kinh nghiệm khởi nghiệp... bài bản cho học viên có nhu cầu kết nối và start-up trong lĩnh vực tài chính, công nghệ,…",
      ],
    },
  ];

  const listBenefit: string[] = [
    "Được học lại miễn phí trọn đời cho cựu học viên",
    "Tài trợ và tư vấn triển khai cho đề án khởi nghiệp FinTech khả thi",
    "Được bảo lưu khóa học nếu không có thời gian học",
    "Được giới thiệu công việc nếu đạt thành tích tốt trong khóa học và sản phẩm đầu ra tiềm năng",
    "Hỗ trợ tư vấn khởi nghiệp, vốn khởi nghiệp cho các dự án tiềm năng",
    "Được nhận giấy chứng nhận tham gia khóa học",
    "Có video quay lại mỗi buổi học để học viên nghiên cứu",
    "Tham gia cộng đồng FinTech, Quantitative Finance của ICLS Tech và được giải đáp các thắc mắc trong và sau khóa học",
  ];

  return (
    <>
    <Seo
        title="Khoá học Fintech - Công nghệ tài chính"
        description="Khóa học Fintech và Khởi nghiệp Công nghệ cung cấp cái nhìn sâu sắc về cách công nghệ đang cách mạng hóa ngành tài chính. Học viên sẽ tìm hiểu về ngân hàng kỹ thuật số, mô hình kinh doanh fintech, các công cụ tài chính, và phân tích định lượng."
        keywords="Khóa học Fintech, Ngân hàng kỹ thuật số, Khởi nghiệp công nghệ, Mô hình kinh doanh fintech, Công cụ tài chính, Phân tích định lượng, Tài chính doanh nghiệp, Định giá cổ phiếu, Thị trường tài chính, Chiến lược đầu tư, Blockchain và crypto, Ứng dụng công nghệ trong tài chính, Hệ sinh thái fintech, Phân tích thị trường bất động sản, R&D và khởi nghiệp, Lập kế hoạch kinh doanh, Tối ưu hóa tài chính, Phát triển sản phẩm khởi nghiệp, Case study fintech, Kết nối hệ sinh thái khởi nghiệp"
        url="https://iclstech.edu.vn/course/Fintech"
        image="/logoICLS.png"
        typeJsonSchema="Course"
      />
      {children}
      <div className="grid grid-cols-12 px-6 md:px-10 py-10 md:py-10 gap-4">
        <CourseObjective listObjective={listObjective} />
        <TargetStudent listTarget={listTarget} />
        <CourseBenefit listBenefit={listBenefit} title={"HỖ TRỢ TỪ ICLS TECH"}/>
      </div>
    </>
  );
};

export default FintechLayout;
