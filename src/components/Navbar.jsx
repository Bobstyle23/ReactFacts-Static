import React from "react";
import logo from "../assets/reactjs-icon.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <img src={logo} className="logo" alt="" />
        <h1 className="header-text">ReactFacts</h1>
      </nav>
      <h3>React Course - Project 1</h3>
    </div>
  );
};

export default Navbar;
