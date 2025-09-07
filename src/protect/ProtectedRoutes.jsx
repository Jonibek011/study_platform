import React from "react";
import { Outlet, Navigate } from "react-router-dom"; // ✅ Navigate komponentini import qilamiz
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoutes({ role }) {
  const user = useContextSelector(AuthContext, (ctx) => ctx.user);

  if (!user) {
    return <Navigate to="/auth/login" replace />; // ✅ return yozilishi shart
  }

  if (role && role !== user.role) {
    return <Navigate to="/" replace />; // ✅ return yozilishi shart
  }

  return <Outlet />;
}

export default ProtectedRoutes;
