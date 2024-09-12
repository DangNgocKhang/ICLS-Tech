"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinkMbl from "./NavLinkMbl";
import { listSubCourse, listSubBlog } from "./ListNavigate";
// Import usePathname from next/navigation
import { usePathname } from "next/navigation";

interface NavigateMblProps {
  colorVisit: string;
  colorNoneVisit: string;
}

const NavigateMbl: React.FC<NavigateMblProps> = ({
  colorVisit,
  colorNoneVisit,
}) => {
  const [openSubNavigate, setOpenSubNavigate] = useState<string>("");
  const pathname = usePathname(); // Get the current path from next/navigation

  const handleOpenSub = (type: string) => {
    setOpenSubNavigate(openSubNavigate === type ? "" : type);
  };

  return (
    <>
      <Link href="/" passHref>
        <span
          className={`${pathname === "/" ? colorVisit : colorNoneVisit}`}
          onClick={() => handleOpenSub("home")}
        >
          TRANG CHỦ
        </span>
      </Link>
      <NavLinkMbl
        path="course"
        title="KHÓA HỌC"
        colorVisit={colorVisit}
        colorNoneVisit={colorNoneVisit}
        currentPath={pathname}
        openSubNavigate={openSubNavigate}
        handleOpenSub={handleOpenSub}
        subNavList={listSubCourse}
      />
      <Link href="/lecturer" passHref>
        <span
          className={`${
            pathname === "/lecturer" ? colorVisit : colorNoneVisit
          }`}
          onClick={() => handleOpenSub("lecturer")}
        >
          GIẢNG VIÊN
        </span>
      </Link>
      <NavLinkMbl
        path="blog"
        title="BLOG"
        colorVisit={colorVisit}
        colorNoneVisit={colorNoneVisit}
        currentPath={pathname}
        openSubNavigate={openSubNavigate}
        handleOpenSub={handleOpenSub}
        subNavList={listSubBlog}
      />
      <Link href="/aboutus" passHref>
        <span
          className={`${pathname === "/aboutus" ? colorVisit : colorNoneVisit}`}
          onClick={() => handleOpenSub("aboutus")}
        >
          VỀ ICLS TECH
        </span>
      </Link>

      <Link href="/community" passHref>
        <span
          className={`${
            pathname === "/community" ? colorVisit : colorNoneVisit
          }`}
          onClick={() => handleOpenSub("community")}
        >
          CỘNG ĐỒNG
        </span>
      </Link>
    </>
  );
};

export default NavigateMbl;
