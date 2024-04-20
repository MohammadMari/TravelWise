import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={logo} alt="logo" />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
