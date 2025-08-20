import React from "react";
import { Outlet } from "react-router-dom";
function TeacherLayouts() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default TeacherLayouts;
