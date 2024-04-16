import React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row my-5">
        <div className="col-12 col-lg-5">
          <h3 className="font-weight-bold">Hello, Its me</h3>
          <h1 className="font-weight-bold">sisi_tarak</h1>
          <h3 className="font-weight-bold">
            I'm a <span>Web Developer</span>
          </h3>
          <p className="font-weight-normal">
            I'm a Student. Insterested in Web Development and Freelancing
          </p>

          <div className="social-media">
            <a href="#" className="mx-2">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="mx-2">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

          <a href="Add your Resume" target="_blank" download className="btn">
            Download Resume
          </a>
        </div>

        <div className="col-12 col-lg-5">
          hii welcome to sisitarak portfolio
        </div>
      </div>
    </div>
  );
};

export default Cover;
