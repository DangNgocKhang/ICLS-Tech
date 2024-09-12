"use client";

import "./globals.css";
import { ToastContainer } from "react-toastify";
const Header = lazy(() => import("./Header/Header"));
const HeaderMbl = lazy(() => import("./Header/HeaderMbl"));
import { lazy, Suspense } from "react";
import useWindowDimensions from "@/hook/useWindowDimension";
import LoadingPage from "./PagesState/LoadingPage";
import Footer from "./Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { width } = useWindowDimensions();
  return (
    <html lang="en">
      <head>
        <title>ICLS TECH</title>
      </head>
      <body className="">
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
      </body>
    </html>
  );
}
