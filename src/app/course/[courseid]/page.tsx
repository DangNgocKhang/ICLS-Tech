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
    </div>
  );
}
