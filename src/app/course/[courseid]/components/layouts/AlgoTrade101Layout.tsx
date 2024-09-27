// components/layouts/AlgoTrade101Layout.tsx
import { ReactNode } from "react";
import TargetStudent from "../TargetStudent";
import CourseObjective from "../CourseObjective";
import CourseBenefit from "../CourseBenefit";

interface LayoutProps {
  children: ReactNode;
}
interface Objective {
  title: string;
  items: string[];
}
const AlgoTrade101Layout = ({ children }: LayoutProps) => {
  const listTarget: string[] = [
    "Có đam mê học hỏi đầu tư, giao dịch tài chính, chứng khoán và công nghệ tài chính (FinTech)",
    "Có hứng thú với kiến thức cơ bản về Python và lập trình",
    "Nhà đầu tư cá nhân tìm kiếm phương pháp mới, ứng dụng công nghệ trong tự động hóa giao dịch các sản phẩm tài chính",
    "Nhà đầu tư tài chính, các cố vấn đầu tư của tổ chức tài chính, quỹ đầu tư, nhà môi giới, nhà nghiên cứu thị trường cần các công cụ tự động để tối ưu hiệu suất đầu tư",
  ];

  const listObjective: Objective[] = [
    {
      title: "",
      items: [
        "Các khái niệm về giao dịch thuật toán và tự động hóa các giao dịch trên các loại tài sản như chứng khoán, crypto,..",
        "Cái khái niệm cơ bản về Machine learning, các mô hình học máy, cách làm việc với dữ liệu tài chính",
      ],
    },
    {
      title: "Áp dụng lợi thế của thuật toán và giao dịch tự động cho đầu tư",
      items: [
        "Hiểu và phân tích các loại data tài chính trên nhiều loại tài sản",
        "Tự động hóa các giao dịch cá nhân",
        "Quản lý chủ động danh mục đầu tư cá nhân",
      ],
    },
    {
      title: "Áp dụng lợi thế Machine Learning cho tài chính",
      items: [
        "Hiểu được phương pháp ML trong việc tạo ra chiến thuật giao dịch",
        "Hiểu được ưu và nhược điểm của phương pháp để quyết định đầu tư",
        "Sử dụng công cụ có sẵn về ML",
        "Xây dựng công cụ đầu tư cho riêng mình",
      ],
    },
  ];
  const listBenefit: string[] = [
    "Được học lại miễn phí trọn đời cho cựu học viên",
    "Sử dụng các tool Machine Learning cho trading",
    "Sử dụng mobile app độc quyền của ICLS Tech để theo dõi hiệu suất giao dịch",
    "Hỗ trợ nghiên cứu học thuật về tài chính định lượng",
    "Được nhận giấy chứng nhận tham gia khóa học",
    "Có video quay lại mỗi buổi học để học viên nghiên cứu",
    "Được tham gia cộng đồng Quant Trading với nhiều giảng viên, thành viên kinh nghiệm",
    "Giảng viên cam kết đồng hành cùng học viên đến khi lập trình thành công bot trading ổn định",
  ];

  return (
    <>
      {children}
      <div className="grid grid-cols-12 px-6 md:px-10 py-10 md:py-10 gap-4">
        <CourseObjective listObjective={listObjective} />
        <TargetStudent listTarget={listTarget} />
        <CourseBenefit listBenefit={listBenefit} />
      </div>
    </>
  );
};

export default AlgoTrade101Layout;
