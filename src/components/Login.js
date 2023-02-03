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
    <div className="homepage d-flex w-100 justify-content-center">
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label">Username:</label>
              <br />
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="form-control"
              />
              {usernameError && (
                <small className="text-danger">{usernameError}</small>
              )}
            </div>
            <div>
              <label className="form-label">Password:</label>
              <br />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
              />
              {passwordError && (
                <small className="text-danger">{passwordError}</small>
              )}
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Login
            </button>
          </form>
        </div>
        <div className="card-footer d-flex gap-1">
          <p className="text-muted"> Don't have an account?</p>
          <NavLink to="/signup" className="nav-link text-primary">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
