import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand mx-2" to="/">
        <img src="./Images/logo.png" alt="" style={{width:'60px'}} className='mx-3'/>
          Flower Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="btn btn-outline-dark">
            <i className="fa fa-shopping-cart"></i> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;