"use client";

import "./globals.css";
import { ToastContainer } from "react-toastify";
const Header = lazy(() => import("./Header/Header"));
const HeaderMbl = lazy(() => import("./Header/HeaderMbl"));
import { lazy, Suspense } from "react";
import useWindowDimensions from "@/hook/useWindowDimension";
import LoadingPage from "./PagesState/LoadingPage";
import Footer from "./Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Seo from "./Seo";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { width } = useWindowDimensions();
  return (
    <html lang="en">
      <Seo
        title="ICLS TECH"
        description="Khóa học Python cơ bản giúp bạn nắm vững kiến thức lập trình từ những khái niệm đơn giản đến nâng cao. Phù hợp cho người mới bắt đầu, khóa học mang đến nền tảng vững chắc để bạn tự tin áp dụng Python vào các dự án thực tế và phát triển kỹ năng lập trình trong tương lai."
        keywords="Khóa học quant trading cho người mới bắt đầu, Đào tạo algorithmic trading từ cơ bản đến nâng cao, Khóa học về chiến lược giao dịch định lượng, Học cách phát triển hệ thống giao dịch tự động, Khóa học ứng dụng machine learning trong trading, Khóa học phân tích dữ liệu cho giao dịch tài chính, Học lập trình Python cho algorithmic trading, Khóa học tối ưu hóa chiến lược giao dịch, Đào tạo về quản lý rủi ro trong quant trading, Khóa học về kỹ thuật backtesting trong trading, Học cách xây dựng mô hình tài chính cho trading, Khóa học sử dụng API trong algorithmic trading, Khóa học phân tích thị trường tài chính bằng dữ liệu lớn, Đào tạo về các công cụ giao dịch tự động, Khóa học phát triển bot giao dịch, Học về kỹ thuật phân tích thống kê trong trading, Khóa học về trading psychology và quyết định đầu tư, Khóa học ứng dụng thuật toán trong thị trường tài chính, Học cách sử dụng phần mềm trading chuyên nghiệp, Khóa học về giao dịch cryptocurrency bằng quant trading"
        url="https://iclstech.edu.vn"
        image="/logoICLS.png"
        typeJsonSchema="Website"
      />

      <body className="">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          {width !== 0 ? (
            width > 1024 ? (
              <Suspense fallback={<LoadingPage />}>
                <Header />
                {children}
                <Footer />
              </Suspense>
            ) : (
              <Suspense fallback={<LoadingPage />}>
                <HeaderMbl />
                {children}
                <Footer />
              </Suspense>
            )
          ) : null}
          <ToastContainer autoClose={1500} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
