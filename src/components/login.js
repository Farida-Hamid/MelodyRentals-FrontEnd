import React from 'react';
import authLogin from '../api/auth';

const Login = () => {
  authLogin();
  const token = localStorage.getItem('token');
  console.log('token read from local storage', token);

  return (
    <div>
      Login page
      <h1>token</h1>
    </div>
  );
};

export default Login;
