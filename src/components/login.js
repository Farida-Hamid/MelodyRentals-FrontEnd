import React from "react";
import auth_login from "../api/auth";

const Login = () => {
  const token = auth_login();

  return (
    <div>
      Login page
      <h1>token</h1>
    </div>
  );
};

export default Login;
