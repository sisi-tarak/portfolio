import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Cover from "./Components/Cover/Cover.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import DivSpace from "./Components/DivSpace/DivSpace.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <DivSpace/>
      <AboutMe />
    </>
  );
};

export default App;
