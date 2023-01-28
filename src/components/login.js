import React from "react";
import auth_login from "../api/auth";

const Login = () => {
  auth_login();
  const token = localStorage.getItem("token");
  console.log('token at login', token);

  return (
    <div>
      Login page
      <h1>token</h1>
    </div>
  );
};

export default Login;
