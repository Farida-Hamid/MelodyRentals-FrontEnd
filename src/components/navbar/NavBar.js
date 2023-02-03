import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaVimeoV, FaPinterest, FaFacebook, FaGooglePlus,
} from 'react-icons/fa';
import Logo from '../img/Logos.png';
import useToken from '../../redux/Auth/useToken';
import {deleteInstrument, logout} from '../../api/api';
import {useSelector} from "react-redux";
import{useDispatch} from "react-redux";

const SignUpButton = () => {
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect({
        screen_hint: 'signup',
      })}
    >
      <NavLink to="/signup">
      Sign Up
      </NavLink>
    </button>
  );
};

const LoginButton = () => {
  return (
    <button type="button">
      <NavLink to="/login" className="btn btn-primary">
        Log In
      </NavLink>
    </button>
  );
};
const LogoutButton = () => {
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      Log Out
    </button>
  );
};

const DeleteButton = () => {
  const dispatch = useDispatch();
  return(
      <button className="btn btn-danger btn-block" onClick={() =>dispatch(deleteInstrument(11))}>
       Delete Instrument
      </button>
  );
};

const AuthenticationButton = (props) => {
  // const [isAuthenticated, setAuthenticated] = useState(false);
  const { isAuthenticated } = props;
  if (isAuthenticated === false) {
    return (
      <>
        <LoginButton />
        <SignUpButton />
      </>
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
            <div className="container-fluid nav-link mb-1">
              <NavLink
                to="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline ms-4 mt-2 fw-bold">Instrument</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink
                to="/reserve"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline ms-4 fw-bold">RESERVE</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink
                to="/my-reservations"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline ms-4 fw-bold">MY RESERVATIONS</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink
                to="/add-instrument"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline ms-4 fw-bold ">ADD Instrument</span>
              </NavLink>
            </div>

            <div className="container-fluid nav-link mb-1">
              <NavLink
                to="/delete"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline ms-4 fw-bold">DELETE Instrument</span>
              </NavLink>
            </div>
            <AuthenticationButton isAuthenticated={isAuthenticated} />
            <DeleteButton />
          </div>
          <div className="container-fluid mb-5 mt-5 me-5">
            <div className="d-flex justify-content-between me-3 ms-3">
              <a href="/socials" className="list-group-item list-group-item-action">
                <FaTwitter className="fa-brands" />
              </a>
              <a href="/socials" className="list-group-item list-group-item-action">
                <FaFacebook className="fa-brands" />
              </a>
              <a href="/socials" className="list-group-item list-group-item-action">
                <FaGooglePlus className="fa-brands" />
              </a>
              <a href="/socials" className="list-group-item list-group-item-action">
                <FaVimeoV className="fa-brands" />
              </a>
              <a href="/socials" className="list-group-item list-group-item-action">
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
