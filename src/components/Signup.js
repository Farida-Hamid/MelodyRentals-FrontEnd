/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import { userRegister } from '../redux/Auth/auth';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  // error handling state
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // after form submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    dispatch(userRegister(values,navigate));
  };

  // error handling
  const validate = () => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (!values.password_confirmation) {
      errors.password_confirmation = 'Confirm Password is required';
    }
    if (values.password !== values.password_confirmation) {
      errors.password_confirmation = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <>
      <div className="homepage d-flex w-100 justify-content-center">
        <div className="card">
          <div className="card-header">Sign Up</div>
          <div className="card-body">
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="label" className="form-label">
                  Name:
                </label>
                <br />
                <input
                  type="text"
                  name = "name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  className="form-control"
                />
                {errors && <small className="text-danger">{errors.name}</small>}
              </div>
              <div>
                <label htmlFor="label-1" className="form-label">
                  Username:
                </label>
                <br />
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  className="form-control"
                />
                {errors && (
                  <small className="text-danger">{errors.username}</small>
                )}
              </div>
              <div>
                <label htmlFor="label-2" className="form-label">
                  Email:
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  className="form-control"
                />
                {errors && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div>
                <label htmlFor="label-3" className="form-label">
                  Password:
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  className="form-control"
                />
                {errors && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>
              <div>
                <label htmlFor="label-4" className="form-label">
                  Password:
                </label>
                <br />
                <input
                  type="password"
                  name="password_confirmation"
                  value={values.password_confirmation}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                  className="form-control"
                />
                {errors && (
                  <small className="text-danger">
                    {errors.password_confirmation}
                  </small>
                )}
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Sign Up
              </button>
            </form>
          </div>
          <div className="card-footer d-flex gap-1">
            <p className="text-muted"> Already have account?</p>
            <NavLink to="/login" className="nav-link text-primary">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
