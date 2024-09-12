"use client";

import React, { ReactElement, useEffect, useState } from "react";
import CircularBackground from "./components/CircularBackground";

export default function Page({
  params,
}: {
  params: { courseid: string };
}): ReactElement {
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    switch (params.courseid) {
      case "Algo-Trade-101":
        setTitle("Algo Trade 101 cơ bản");
        break;
      case "Algo-Trade-201":
        setTitle("Algo Trade 201 Nâng cao");
        break;
      case "Fintech":
        setTitle("Fintech - Công nghệ tài chính");
        break;
      case "Python-Foundation":
        setTitle("Python Foundation");
        break;
    }
  }, [params.courseid]);
  return (
    <div>
      <CircularBackground title={title} />
      <h1 className="visible md:hidden self-center text-2xl md:text-3xl font-bold text-center text-primary-blue-lighter flex flex-col mt-4">
        <span>Khóa học </span>
        {title}
      </h1>
    </div>
  );
}
