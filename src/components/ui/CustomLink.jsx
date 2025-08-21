import React from "react";
import { NavLink } from "react-router-dom";
function CustomLink({ to, children, end = false }) {
  return (
    <NavLink
      end={end}
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg flex items-center gap-5  transition-all duration-200 text-nav-text
         ${
           isActive
             ? "bg-blue-first text-white hover:bg-blue-first"
             : "hover:bg-gray-200"
         }`
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomLink;
