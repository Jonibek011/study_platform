import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContextSelector } from "use-context-selector";
import { useNavigate } from "react-router-dom";

function Login() {
  const user = useContextSelector(AuthContext, (ctx) => ctx.user);
  const navigation = useNavigate();
  if (user) {
    navigation("/student");
  }

  return <div>Login</div>;
}

export default Login;
