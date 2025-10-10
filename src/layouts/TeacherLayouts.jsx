import React from "react";
import { Outlet } from "react-router-dom";

import TeacherNavbar from "../components/teacher/TeacherNavbar";
import TeacherSidebar from "../components/teacher/TeacherSidebar";
import { useWindowSize } from "../hooks/optimizationHooks/useWindowSize";
function TeacherLayouts() {
  const { width, height } = useWindowSize();
  return (
    <div
      className={`bg-second-bg max-h-screen overflow-hidden flex-flex-col  w-full`}
    >
      <TeacherNavbar />
      <div
        className={`flex w-full ${
          width > 640 && height < 500
            ? "h-[600px] overflow-y-auto bg-second-bg "
            : "h-[calc(100vh-70px)]"
        } `}
      >
        <TeacherSidebar className="z-50" />
        <main className="w-full h-full overflow-y-hidden  md:px-5 xl:px-8 py-0 xl:pe-10 2xl:pe-[90px]  scroller">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default TeacherLayouts;
