interface ISubNavigate {
  path: string;
  title: string;
}
export const listSubCourse: ISubNavigate[] = [
  { path: "course/Algo-Trade-101", title: "Algo Trade 101 cơ bản" },
  { path: "course/Algo-Trade-201", title: "Algo Trade 201 Nâng cao" },
  { path: "course/Fintech", title: "Khoá học Fintech - Công nghệ tài chính" },
  { path: "course/Python-Foundation", title: "Khoá học Python Foundation" },
];

export const listSubBlog: ISubNavigate[] = [
  { path: "blog", title: "Blog" },
];
