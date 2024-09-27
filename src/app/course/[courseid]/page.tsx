// app/course/[courseid]/page.tsx
import { generateMetadataCourse } from "@/utils/metadata";
import React, { ReactElement } from "react";
import CourseHeader from "./components/CourseHeader";

export async function generateMetadata({
  params,
}: {
  params: { courseid: string };
}) {
  return generateMetadataCourse(params.courseid);
}

export default function Page({
  params,
}: {
  params: { courseid: string };
}): ReactElement {
  return (
    <>
      <CourseHeader title={params.courseid} />
    </>
  );
}
