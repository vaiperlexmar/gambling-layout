import React from "react";
import Link from "../Link";

function Menu({ isMenuOpen, isHamburgerClicked }) {
  return (
    <ul className="menu">
      <Link
        linkName={"About us"}
        path={"#"}
        className={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
      />
      <Link
        linkName={"Brands"}
        path={"#"}
        className={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
      />
      <Link
        linkName={"Commissions"}
        path={"#"}
        className={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
      />
      <Link
        linkName={"News"}
        path={"#"}
        className={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
      />
      <Link
        linkName={"Contact us"}
        path={"#"}
        className={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
      />
      <Link
        linkName={"Careers"}
        path={"#"}
        className={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
      />

      <Link
        linkName={"Log In"}
        path={"#"}
        className={`menu__item menu__login ${
          isHamburgerClicked ? "slide-top" : "slide-left-out-disappear absolute"
        }`}
      />

      <Link
        linkName={"Sign Up"}
        path={"#"}
        className={`menu__item menu__sign-up ${
          isHamburgerClicked ? "slide-top" : "slide-left-out-disappear absolute"
        }`}
      />
    </ul>
  );
}

export default Menu;
