"use client";

import AboutICLS from "./Home/AboutICLS";
import Banner from "./Home/Banner";
import CourseCardList from "./Home/CourseCardList";
import CustomerService from "./Home/CustomerService";
import Feedback from "./Home/Feedback";
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
      <LearningPath />
      <Feedback />
    </div>
  );
}
