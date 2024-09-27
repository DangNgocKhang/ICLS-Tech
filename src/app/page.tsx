"use client";

import {
  SplitEffectPoint,
  SplitEffectWaveblue,
} from "./components/SplitEffect";
import AboutICLS from "./Home/AboutICLS";
import Banner from "./Home/Banner";
import BlogSharing from "./Home/BlogSharing";
import CourseCardList from "./Home/CourseCardList";
import CustomerService from "./Home/CustomerService";
import Feedback from "./Home/Feedback";
import ImageIntroduce from "./Home/ImageIntroduce";
import InstructorTeam from "./Home/InstructorTeam";
import LearningPath from "./Home/LearningPath";

export default function Home() {
  return (
    <div className="relative overflow-y-auto overflow-hidden">
      <Banner />
      <AboutICLS />
      <InstructorTeam />
      <CourseCardList />
      <CustomerService />
      <SplitEffectWaveblue />
      <LearningPath />
      <SplitEffectWaveblue />
      <Feedback />
      <SplitEffectPoint />
      <BlogSharing />
      <SplitEffectPoint />
      <ImageIntroduce />
    </div>
  );
}
