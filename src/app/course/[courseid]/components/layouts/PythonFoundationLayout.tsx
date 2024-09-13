// components/layouts/PythonFoundationLayout.tsx
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
const PythonFoundationLayout = ({ children }: LayoutProps) => {
  const listTarget: string[] = [
    "Học sinh trung học có niềm đam mê, muốn làm quen với lập trình và phát triển tư duy logic.",
    "Sinh viên muốn tiếp cận, hiểu biết sâu hơn về lập trình và chuẩn bị cho sự nghiệp trong lĩnh vực công nghệ.",
    "Sinh viên đang theo học các chương trình lập trình tại các đơn vị khác, giúp nâng cao kỹ năng lập trình và hiểu biết về Python.",
    "Các chuyên viên ngành kỹ thuật muốn nâng cao hiệu suất làm việc bằng cách áp dụng kỹ năng lập trình.",
    "Các chuyên viên trong ngành kinh tế, ngân hàng, fintech muốn làm việc sâu hơn với dữ liệu, phân tích dữ liệu và phát triển các giải pháp tài chính kỹ thuật số.",
    "Có định hướng làm việc với Python để xây dựng ứng dụng trong các lĩnh vực này.",
    "Có đam mê học hỏi đầu tư, giao dịch tài chính, chứng khoán và công nghệ tài chính (FinTech).",
    "Nhà đầu tư cá nhân tìm kiếm phương pháp mới, ứng dụng công nghệ trong tự động hóa giao dịch các sản phẩm tài chính.",
    "Nhà đầu tư tài chính, các cố vấn đầu tư của tổ chức tài chính, quỹ đầu tư, nhà môi giới, nhà nghiên cứu thị trường cần các công cụ tự động để tối ưu hiệu suất đầu tư.",
  ];

  const listObjective: Objective[] = [
    {
      title: "",
      items: [
        "Hiểu và áp dụng các khái niệm cơ bản của lập trình Python như biến, điều kiện, vòng lặp, hàm, và cấu trúc dữ liệu.",
        "Có khả năng sử dụng các thư viện và framework phổ biến của Python như NumPy, Pandas, Django, Flask để xử lý dữ liệu và phát triển ứng dụng web.",
        "Hiểu và áp dụng các khái niệm cơ bản của OOP như lớp, đối tượng, kế thừa, và đa hình.",
        "Áp dụng Python để giải quyết các vấn đề thực tế trong lĩnh vực của mình, từ phân tích dữ liệu đến phát triển phần mềm.",
        "Nền tảng vững chắc để các bạn học viên có thể học sâu hơn về các chủ đề như machine learning, web scraping, automation để mở rộng kiến thức và kỹ năng lập trình Python.",
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

export default PythonFoundationLayout;
