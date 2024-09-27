import { Metadata } from "next";
import { generateMetadataWebsite } from "./SEO";

// New function to generate metadata based on courseid
export const generateMetadataCourse = (courseid: string): Metadata => {
  switch (courseid) {
    case "Algo-Trade-101":
      return generateMetadataWebsite({
        title: "Khóa học Algorithmic Trading & Machine learning 101 cơ bản",
        description:
          "Khóa học Algorithmic Trading cung cấp kiến thức toàn diện về giao dịch thuật toán bằng Python. Học viên sẽ khám phá thị trường tài chính, xây dựng bot trading, sử dụng API để truy cập dữ liệu, áp dụng phân tích kỹ thuật và mô hình dự báo, giúp bạn triển khai hệ thống giao dịch hiệu quả trên thị trường chứng khoán, Forex và cryptocurrency.",
        url: "https://iclstech.edu.vn/course/Algo-Trade-101",
        keywords: [
          "Algorithmic Trading bằng Python",
          "Khóa học giao dịch thuật toán",
          "Xây dựng bot trading",
          "Giao dịch tự động với Python",
          "Phân tích kỹ thuật trong giao dịch",
          "Machine Learning trong giao dịch tài chính",
          "Dữ liệu thị trường và API",
          "Chiến lược giao dịch thuật toán",
          "Quản lý rủi ro trong giao dịch",
          "Hệ thống giao dịch tự động",
          "Giao dịch Forex và Crypto",
          "Phân tích thống kê trong đầu tư",
          "Mô hình dự báo tài chính",
          "Khóa học trực tuyến về giao dịch",
          "Học giao dịch thuật toán cơ bản",
          "Bot trading",
          "Khoá dạy algo trade đầu tiên tại Việt Nam",
        ],

        imageUrl: "/logoICLS.png",
        author: "ICLS TECH",
        twitterHandle: "@iclstech",
      });

    case "Algo-Trade-201":
      return generateMetadataWebsite({
        title: "Khóa học Algorithmic Trading & Machine learning 201 nâng cao",
        description:
          "Khóa học Algorithmic Trading Advanced được thiết kế cho chuyên gia tài chính và nhà phân tích định lượng, giúp hiểu sâu về toán học trong mô hình tài chính và giao dịch thuật toán. Khám phá các kỹ thuật nâng cao trong định giá chứng khoán phái sinh, tối ưu hóa danh mục đầu tư và quản lý rủi ro.",
        url: "https://iclstech.edu.vn/course/Algo-Trade-201",
        keywords: [
          "Algorithmic Trading Advanced",
          "Khóa học giao dịch thuật toán nâng cao",
          "Toán học trong giao dịch thuật toán",
          "Mô hình tài chính và định giá phái sinh",
          "Tối ưu hóa danh mục đầu tư",
          "Mô phỏng Monte Carlo",
          "Black-Scholes-Merton",
          "Chiến lược giao dịch Forex và CFDs",
          "Lý thuyết danh mục đầu tư Markowitz",
          "Machine Learning trong tài chính",
          "Định giá quyền chọn",
          "Phân tích biến động tài chính",
          "Công cụ phái sinh và thị trường",
          "MetaTrader5 trong giao dịch",
          "Chiến thuật carry trade",
          "Statistical Arbitrage trong Forex",
          "Kỹ thuật tối ưu hóa metaheuristic",
          "Dự báo biến động tài chính",
          "Xác suất và thống kê trong đầu tư",
          "Phần mềm mô hình tài chính",
          "Bot trading",
          "Khoá dạy algo trade đầu tiên tại Việt Nam",
          "Chứng quyền",
        ],
        imageUrl: "/logoICLS.png",
        author: "ICLS TECH",
        twitterHandle: "@iclstech",
      });

    case "Fintech":
      return generateMetadataWebsite({
        title: "Khoá học Fintech - Công nghệ tài chính",
        description:
          "Khóa học Fintech và Khởi nghiệp Công nghệ cung cấp cái nhìn sâu sắc về cách công nghệ đang cách mạng hóa ngành tài chính. Học viên sẽ tìm hiểu về ngân hàng kỹ thuật số, mô hình kinh doanh fintech, các công cụ tài chính, và phân tích định lượng.",
        url: "https://iclstech.edu.vn/course/Fintech",
        keywords: [
          "Khóa học Fintech",
          "Ngân hàng kỹ thuật số",
          "Khởi nghiệp công nghệ",
          "Mô hình kinh doanh fintech",
          "Công cụ tài chính",
          "Phân tích định lượng",
          "Tài chính doanh nghiệp",
          "Định giá cổ phiếu",
          "Thị trường tài chính",
          "Chiến lược đầu tư",
          "Blockchain và crypto",
          "Ứng dụng công nghệ trong tài chính",
          "Hệ sinh thái fintech",
          "Phân tích thị trường bất động sản",
          "R&D và khởi nghiệp",
          "Lập kế hoạch kinh doanh",
          "Tối ưu hóa tài chính",
          "Phát triển sản phẩm khởi nghiệp",
          "Case study fintech",
          "Kết nối hệ sinh thái khởi nghiệp",
        ],
        imageUrl: "/logoICLS.png",
        author: "ICLS TECH",
        twitterHandle: "@iclstech",
      });
    case "Python-Foundation":
      return generateMetadataWebsite({
        title: "Khoá học Python Foundation",
        description:
          "Khóa học Python cơ bản giúp bạn nắm vững kiến thức lập trình từ những khái niệm đơn giản đến nâng cao. Phù hợp cho người mới bắt đầu, khóa học mang đến nền tảng vững chắc để bạn tự tin áp dụng Python vào các dự án thực tế và phát triển kỹ năng lập trình trong tương lai.",
        url: "https://iclstech.edu.vn/course/Python-Foundation",
        keywords: [
          "Khóa học Python cơ bản",
          "Học lập trình Python cho người mới bắt đầu",
          "Python cho người mới bắt đầu",
          "Học Python online miễn phí",
          "Lập trình Python cơ bản",
          "Khóa học lập trình Python trực tuyến",
          "Học Python từ đầu",
          "Python cho lập trình viên mới",
          "Tài liệu học Python cơ bản",
          "Bài tập Python cho người mới",
          "Hướng dẫn lập trình Python",
          "Cài đặt Python và cấu hình",
          "Khóa học Python chất lượng cao",
          "Tìm hiểu về cấu trúc dữ liệu trong Python",
          "Xử lý lỗi trong Python",
        ],
        imageUrl: "/logoICLS.png",
        author: "ICLS TECH",
        twitterHandle: "@iclstech",
      });

    default:
      return generateMetadataWebsite({
        title: "Khóa học không xác định",
        description: "Mô tả không có sẵn cho khóa học này.",
        url: "https://iclstech.edu.vn/course/unknown",
        keywords: ["Khóa học", "Giáo dục"],
        imageUrl: "/logoICLS.png",
        twitterHandle: "@iclstech",
      });
  }
};
