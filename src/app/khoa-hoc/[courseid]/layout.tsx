// app/course/[courseid]/layout.tsx
import { ReactNode } from "react";
import AlgoTrade101Layout from "./components/layouts/AlgoTrade101Layout";
import AlgoTrade201Layout from "./components/layouts/AlgoTrade201Layout";
import FintechLayout from "./components/layouts/FintechLayout";
import PythonFoundationLayout from "./components/layouts/PythonFoundationLayout";

interface CourseLayoutProps {
  children: ReactNode;
  params: { courseid: string };
}

const CourseLayout = ({ children, params }: CourseLayoutProps) => {
  const { courseid } = params;

  // Render layout based on courseid
  switch (courseid) {
    case "khoa-hoc-algorithmic-trading-machine-learning-co-ban-101":
      return <AlgoTrade101Layout>{children}</AlgoTrade101Layout>;
    case "khoa-hoc-algorithmic-trading-machine-learning-foundation-201":
      return <AlgoTrade201Layout>{children}</AlgoTrade201Layout>;
    case "Fintech":
      return <FintechLayout>{children}</FintechLayout>;
    case "Python-Foundation":
      return <PythonFoundationLayout>{children}</PythonFoundationLayout>;
    default:
      // Default layout if no matching courseid found
      return <div>{children}</div>;
  }
};

export default CourseLayout;
