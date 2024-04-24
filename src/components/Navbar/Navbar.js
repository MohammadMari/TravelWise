import React from "react";
import { NavLink as Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/" activeStyle>
          <img className="navbar-logo" src={logo} alt="logo" />
        </Link>
        <div className="navitem-container ">
          <Link className="link" to="/travel" activeStyle>
            Travel
          </Link>
          <Link className="link" to="/lounging" activeStyle>
            Lounging
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
