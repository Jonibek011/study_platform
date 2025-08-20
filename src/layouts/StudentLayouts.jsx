import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function StudentLayouts() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default StudentLayouts;
