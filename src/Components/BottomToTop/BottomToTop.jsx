import React from "react";
import "./BottomToTop.css";

const BottomToTop = () => {
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

  return (
    <button
      onClick={scrollToTop}
      className="button"
    >
      <i class="fa-solid fa-angle-up"></i>
    </button>
  );
};

export default BottomToTop;
