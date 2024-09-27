import { assets } from "@/assets/assets";
import BlogPost from "@/types/Blog";

export const blogPosts: BlogPost[] = [
  {
    id: "BLOG001",
    imageUrl: assets.blog1.src,
    date: "17/05/2024",
    tag: "Blog Deep Learning",
    title: "5 tác phẩm điện ảnh “gây sốt” về thế giới tài chính (P.1)",
  },
  {
    id: "BLOG002",
    imageUrl: assets.blog2.src,
    date: "02/02/2024",
    tag: "Blog Fintech",
    title: "Các lĩnh vực ứng dụng của Fintech",
  },
  {
    id: "BLOG003",
    imageUrl: assets.blog3.src,
    date: "02/02/2024",
    tag: "Blog Fintech",
    title: "Tài chính trong kỷ nguyên số",
  },
];
