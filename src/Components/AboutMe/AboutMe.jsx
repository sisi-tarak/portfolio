import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container-fluid text-center my-5 py-5" id="about">
      <h3 className="py-5 ">
        About <span>Mee</span>!
      </h3>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <img
              src="../src/assets/sisi_tarakk.jpg"
              alt="sisindri singamsetti"
              className="img-fluid shadow"
            />
          </div>
          <div className="col-12 col-lg-7 mx-3 pl-5 aboutRight">
            <h4 className="aboutName">Sisindri Singamsetti</h4>
            <h6 className="mt-4 mb-5">
              Front-end <span>Developer</span>!
            </h6>
            <p className="py-2">
              I am a front-end developer looking for opportunities to expand my
              skills in Full-Satck Developement. I have knowledge of HTML, CSS,
              Bootstrap, JavaScript, React and some other stuff, and I am
              committed to improving my proficiency in these technologies.
            </p>
            <p className="py-2">
              If you are looking for a motivated and dedicated front-end
              developer, I am available for work opportunities and excited to
              contribute to projects that allow me to expand my experience and
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
