import { assets } from "@/assets/assets";
import BlogPost from "@/types/Blog";

export const blogPosts: BlogPost[] = [
  {
    imageUrl: assets.blog1.src,
    date: "17/05/2024",
    category: "Blog Deep Learning",
    title: "5 tác phẩm điện ảnh “gây sốt” về thế giới tài chính (P.1)",
  },
  {
    imageUrl: assets.blog2.src,
    date: "02/02/2024",
    category: "Blog Fintech",
    title: "Các lĩnh vực ứng dụng của Fintech",
  },
  {
    imageUrl: assets.blog3.src,
    date: "02/02/2024",
    category: "Blog Fintech",
    title: "Tài chính trong kỷ nguyên số",
  },
];
