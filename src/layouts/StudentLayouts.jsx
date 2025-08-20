import React from "react";
import { Outlet } from "react-router-dom";
function StudentLayouts() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default StudentLayouts;
