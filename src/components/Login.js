/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/Auth/auth';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    dispatch(userLogin(username, password, navigate));
  };

  return (
    <div className=" homepage">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {usernameError && <div>{usernameError}</div>}
        </div>
        <div>
          <label className="form-label">Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <div>{passwordError}</div>}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
        <p className="text-muted"> Don't have an account?</p>
        <NavLink to="/signup" className="btn btn-primary">
          Sign up
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
