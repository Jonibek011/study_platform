import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/student/Sidebar";
function StudentLayouts() {
  return (
    <div className="bg-second-bg h-screen w-full">
      <Navbar />
      <div className="flex w-full h-[calc(100vh-90px)]">
        <Sidebar className="hidden lg:block" />
        <main className="w-full h-full overflow-y-hidden px-5 xl:px-8 py-3 xl:pe-10 2xl:pe-[90px]  scroller">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default StudentLayouts;
