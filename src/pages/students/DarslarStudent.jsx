import React from "react";
import { Outlet } from "react-router-dom";

function DarslarStudent() {
  return (
    <div>
      <Link></Link>
      <Link></Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DarslarStudent;
