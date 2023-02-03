import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaTwitter,
  FaVimeoV,
  FaPinterest,
  FaFacebook,
  FaGooglePlus,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../img/Logos.png';
import useToken from '../../redux/Auth/useToken';
import { logoutUser } from '../../redux/Auth/auth';

const SignUpButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate('/signup')}
      className="btn btn-primary btn-sm"
    >
      Sign Up
    </button>
  );
};

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate('/login')}
      className="btn btn-primary btn-sm"
    >
      Log In
    </button>
  );
};
const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="btn btn-danger btn-block btn-sm mt-2"
      onClick={() => dispatch(logoutUser())}
    >
      Log Out
    </button>
  );
};

const AuthenticationButton = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated === null) {
    return (
      <div className="d-flex gap-2 mt-2">
        <LoginButton />
        <SignUpButton />
      </div>
    );
  }
  return <LogoutButton />;
};

const NavBar = () => {
  const isAuthenticated = useToken();
  return (
    <div className="nav-side-bar">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
              <img className="logo" src={Logo} alt="Logo rental call" />
              <div className="container-fluid nav-link ">
                <NavLink
                  to="/"
                  className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
                >
                  <span
                    className="d-none d-sm-inline mx-auto my-4 fw-bold"
                    style={{ fontSize: 16.5 }}
                  >
                    Instrument
                  </span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link ">
                <NavLink
                  to="/reserve"
                  className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
                >
                  <span
                    className="d-none d-sm-inline mx-auto my-4 fw-bold"
                    style={{ fontSize: 16.5 }}
                  >
                    RESERVE
                  </span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link ">
                <NavLink
                  to="/my-reservations"
                  className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
                >
                  <span
                    className="d-none d-sm-inline mx-auto my-4 fw-bold"
                    style={{ fontSize: 16.5 }}
                  >
                    MY RESERVATIONS
                  </span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link ">
                <NavLink
                  to="/add-instrument"
                  className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
                >
                  <span
                    className="d-none d-sm-inline mx-auto my-4 fw-bold"
                    style={{ fontSize: 16.5 }}
                  >
                    ADD Instrument
                  </span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link ">
                <AuthenticationButton isAuthenticated={isAuthenticated} />
              </div>
            </div>
            <div className="container-fluid mb-5 mt-5 me-5">
              <div className="d-flex justify-content-between me-3 ms-3">
                <a
                  href="/socials"
                  className="list-group-item list-group-item-action"
                >
                  <FaTwitter className="fa-brands" />
                </a>
                <a
                  href="/socials"
                  className="list-group-item list-group-item-action"
                >
                  <FaFacebook className="fa-brands" />
                </a>
                <a
                  href="/socials"
                  className="list-group-item list-group-item-action"
                >
                  <FaGooglePlus className="fa-brands" />
                </a>
                <a
                  href="/socials"
                  className="list-group-item list-group-item-action"
                >
                  <FaVimeoV className="fa-brands" />
                </a>
                <a
                  href="/socials"
                  className="list-group-item list-group-item-action"
                >
                  <FaPinterest className="fa-brands" />
                </a>
              </div>
              <div className="container mt-3 ms-3">
                <h6 className="fa-text fw-bold">&copy; 2023 Melody Rentals</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
