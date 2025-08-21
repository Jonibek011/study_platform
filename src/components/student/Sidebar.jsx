import React, { memo } from "react";
import { cn } from "../util/cn";
const Sidebar = memo(function Sidebar({ className = "", ...rest }) {
  return (
    <div className={cn("w-80", className)} {...rest}>
      Sidebar
    </div>
  );
});

export default Sidebar;
