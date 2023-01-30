import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaVimeoV, FaPinterest, FaFacebook, FaGooglePlus } from 'react-icons/fa';
import Logo from '../img/Logos.png';

const MobileNavBar = () => (
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/login');
  //   localStorage.clear();
  //   window.location.reload();
  // };

  <div className="mobile-nav-bar">
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-semibold" id="offcanvasNavbarLabel">
              WELCOME
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body text-dark">
            <div className="offcanvas-body">
              <img className="logo" src={Logo} alt="Logo rental call" />
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mobile-items">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link text-decoration-none">
                    <span className="fs-5 fw-bold">Instrument</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#" className="nav-link text-decoration-none">
                    <span className="fs-5 fw-bold">RESERVE</span>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="#" className="nav-link text-decoration-none">
                    <span className="fs-5 fw-bold">MY RESERVATIONS</span>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="#" className="nav-link text-decoration-none">
                    <span className="fs-5 fw-bold">ADD Instrument</span>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="#" className="nav-link text-decoration-none">
                    <span className="fs-5 fw-bold">DELETE Instrument</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="container-fluid nav-link mt-1 ms-3">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  handleClick();
                }}
              >
                Logout
              </button>
            </div>

            <div className="container-fluid mb-5 mobile-footer">
              <div className="d-flex justify-content-between me-5 ms-5">
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
    </nav>
  </div>
);
export default MobileNavBar;
