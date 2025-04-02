import React from "react";
import "./navbar.css";
import Logo from "./logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">Jene Fabrications</h1>
      </div>
    </nav>
  );
};

export default Navbar;
