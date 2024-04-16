import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container my-2 pl-5">
        <a href="/" className="navbar-brand navLink font-weight-normal">
          sisi_tarak
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
        >
          <span className="fa-solid fa-bars ham-menu"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav font-weight-normal text-center">
            <a href="#" className="navLink nav-link mx-1">
              Home
            </a>
            <a href="#" className="navLink nav-link mx-1">
              Projects
            </a>
            <a href="#" className="navLink nav-link mx-1">
              Skills
            </a>
            <a href="#" className="navLink nav-link mx-1">
              About
            </a>
            <a href="#" className="navLink nav-link mx-1">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
