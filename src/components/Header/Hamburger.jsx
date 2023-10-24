import React from "react";

function Hamburger({ toggleMenu, isMenuOpen, handleMenuClick }) {
  return (
    <>
      <div
        className={`hamburger ${isMenuOpen ? "hamburger_open" : ""}`}
        onClick={handleMenuClick}
      >
        <div className={`burger burger1 ${isMenuOpen ? "rotate1" : ""}`}></div>
        <div className={`burger burger2 ${isMenuOpen ? "rotate2" : ""}`}></div>
        <div className={`burger burger3 ${isMenuOpen ? "rotate3" : ""}`}></div>
      </div>
    </>
  );
}

export default Hamburger;
