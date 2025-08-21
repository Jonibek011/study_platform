import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/student/Sidebar";
function StudentLayouts() {
  return (
    <div className="bg-second-bg h-screen w-full">
      <Navbar />
      <div className="flex w-full h-full">
        <Sidebar />
        <main className="w-full h-full border p-8 pe-10 xl:pe-[100px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default StudentLayouts;
