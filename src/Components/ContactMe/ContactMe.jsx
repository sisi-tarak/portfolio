import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="container my-5 py-5 text-center" id="contactme">
      <h3 className="mt-3 py-5">
        Contact <span>Me</span>!!
      </h3>
      <form>
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="formControl"
              placeholder="First name"
              aria-label="First name"
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="formControl"
              placeholder="Last name"
              aria-label="Last name"
              required
            />
          </div>
        </div>
        <div className="row g-3 align-items-center pt-3 justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="tel"
              className="formControl"
              placeholder="Mobile"
              aria-label="Mobile"
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="email"
              className="formControl"
              placeholder="Email"
              aria-label="Email"
              required
            />
          </div>
        </div>
        <div className="row g-3 pt-3 align-items-center justify-content-center">
          <div className="col-10 col-lg-6">
            <textarea
              type="textarea"
              className="formControl"
              placeholder="Message"
              aria-label="Message"
              rows="10"
              required
            />
          </div>
        </div>
        <button type="submit" className="button mt-5">
          Send Message🫣
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
