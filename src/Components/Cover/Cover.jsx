import React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center my-5 py-5">
        <div className="col-lg-7 py-5 px-4">
          <h4 className="font-weight-bold">Hello, Its me</h4>
          <h2 className="font-weight-bold">sisi_tarak</h2>
          <h4 className="font-weight-bold mb-4 pb-2">
            I'm a <span>Web Developer</span>
          </h4>
          <p className="font-weight-normal">
            I'm a Student. Insterested in Web Development and Freelancing
          </p>

          <div className="social-media py-3">
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
          <button
            href="Add your Resume"
            target="_blank"
            download
            className="button my-3"
          >
            Download Resume
          </button>
        </div>
        <div className="col-12 col-lg-4 offset-lg-1 py-5">
          <img
            src="/home/user/my-portfolio/src/assets/sisi_tarak.png"
            alt="sisi_tarak"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
