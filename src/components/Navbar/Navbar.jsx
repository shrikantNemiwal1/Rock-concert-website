import React, { Component } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar" id="navbar">
        <ul className="nav-links">
          <a href="#navbar">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#footer">Contact</a>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
