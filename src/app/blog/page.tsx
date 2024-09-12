import React, { ReactElement } from "react";
import CircularBackground from "./components/CircularBackground";
import BlogSearch from "./components/BlogSearch";
import BlogPostList from "./components/BlogPostList";

export default function Page(): ReactElement {
  return (
    <div className="">
      <CircularBackground />
      <BlogSearch />
      <BlogPostList />
    </div>
  );
}
