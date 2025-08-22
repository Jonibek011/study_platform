import React from "react";
import { NavLink } from "react-router-dom";
function CustomNavLink({
  to,
  children,
  end = false,
  className = "",
  active = "",
  notActive = "",
}) {
  return (
    <NavLink
      end={end}
      to={to}
      className={({ isActive }) =>
        `${className}
         ${isActive ? active : notActive}`
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
