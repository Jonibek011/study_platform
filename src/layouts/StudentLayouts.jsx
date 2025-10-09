import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/student/Sidebar";
import { useWindowSize } from "../hooks/optimizationHooks/useWindowSize";
function StudentLayouts() {
  const { width, height } = useWindowSize();
  return (
    <div className="bg-second-bg h-screen w-full">
      <Navbar />
      <div
        className={`flex w-full ${
          width > 640 && height < 500
            ? "h-[600px] overflow-y-auto bg-second-bg "
            : "h-[calc(100vh-90px)]"
        } `}
      >
        <Sidebar className="z-50" />
        <main className="w-full h-full overflow-y-hidden  md:px-5 xl:px-8 py-0 xl:pe-10 2xl:pe-[90px]  scroller">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default StudentLayouts;
