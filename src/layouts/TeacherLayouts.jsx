import React from "react";
import { Outlet } from "react-router-dom";

import TeacherNavbar from "../components/teacher/TeacherNavbar";
import TeacherSidebar from "../components/teacher/TeacherSidebar";
function TeacherLayouts() {
  return (
    <div className="bg-second-bg h-screen w-full">
      <TeacherNavbar />
      <div className="flex w-full h-[calc(100vh-70px)]">
        <TeacherSidebar className="z-50" />
        <main className="w-full h-full overflow-y-hidden px-2  md:px-5 xl:px-8 py-3 xl:pe-10 2xl:pe-[90px]  scroller">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default TeacherLayouts;
