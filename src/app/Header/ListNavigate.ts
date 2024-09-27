interface ISubNavigate {
  path: string;
  title: string;
}
export const listSubCourse: ISubNavigate[] = [
  { path: "khoa-hoc/khoa-hoc-algorithmic-trading-machine-learning-co-ban-101", title: "Khóa học Algorithmic Trading & Machine learning 101 cơ bản" },
  { path: "khoa-hoc/khoa-hoc-algorithmic-trading-machine-learning-foundation-201", title: "Khóa học Algorithmic Trading & Machine learning 201 nâng cao" },
  { path: "khoa-hoc/Fintech", title: "Khoá học Fintech - Công nghệ tài chính" },
  { path: "khoa-hoc/Python-Foundation", title: "Khoá học Python Foundation" },
];

export const listSubBlog: ISubNavigate[] = [
  { path: "blog", title: "Blog" },
];
export const listCourse: string[] = listSubCourse.map(course => course.title);