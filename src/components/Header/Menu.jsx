import React from "react";
import Link from "../Link";

function Menu(isMenuOpen) {
  return (
    <ul className="menu">
      <Link
        linkName={"About us"}
        path={"#"}
        className={`menu__item ${isMenuOpen ? "slide-right" : ""}`}
      />
      <Link
        linkName={"Brands"}
        path={"#"}
        className={`menu__item ${isMenuOpen ? "slide-right" : ""}`}
      />
      <Link
        linkName={"Commissions"}
        path={"#"}
        className={`menu__item ${isMenuOpen ? "slide-right" : ""}`}
      />
      <Link
        linkName={"News"}
        path={"#"}
        className={`menu__item ${isMenuOpen ? "slide-right" : ""}`}
      />
      <Link
        linkName={"Contact us"}
        path={"#"}
        className={`menu__item ${isMenuOpen ? "slide-right" : ""}`}
      />
      <Link
        linkName={"Careers"}
        path={"#"}
        className={`menu__item ${isMenuOpen ? "slide-right" : ""}`}
      />

      <Link
        linkName={"Log In"}
        path={"#"}
        className={`menu__item menu__login ${isMenuOpen ? "slide-top" : ""}`}
      />

      <Link
        linkName={"Sign Up"}
        path={"#"}
        className={`menu__item menu__sign-up ${isMenuOpen ? "slide-top" : ""}`}
      />
    </ul>
  );
}

export default Menu;
