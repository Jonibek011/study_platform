import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/student/Sidebar";
function StudentLayouts() {
  return (
    <div className="bg-second-bg h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default StudentLayouts;
