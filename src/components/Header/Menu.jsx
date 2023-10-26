import React from "react";
import Link from "../Link";

function Menu({ isMenuOpen, isHamburgerClicked }) {
  return (
    <ul className="menu">
      <Link
        linkName={"About us"}
        path={"#"}
        itemClassName={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
        linkClassName={"menu__link"}
      />
      <Link
        linkName={"Brands"}
        path={"#"}
        itemClassName={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
        linkClassName={"menu__link"}
      />
      <Link
        linkName={"Commissions"}
        path={"#"}
        itemClassName={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
        linkClassName={"menu__link"}
      />
      <Link
        linkName={"News"}
        path={"#"}
        itemClassName={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
        linkClassName={"menu__link"}
      />
      <Link
        linkName={"Contact us"}
        path={"#"}
        itemClassName={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
        linkClassName={"menu__link"}
      />
      <Link
        linkName={"Careers"}
        path={"#"}
        itemClassName={`menu__item ${
          isHamburgerClicked ? "slide-right-in" : "slide-right-out-disappear"
        }`}
        linkClassName={"menu__link"}
      />

      <Link
        linkName={"Log In"}
        path={"#"}
        itemClassName={`menu__item menu__login ${
          isHamburgerClicked ? "slide-top" : "slide-left-out-disappear absolute"
        }`}
        linkClassName={"menu__link"}
      />

      <Link
        linkName={"Sign Up"}
        path={"#"}
        itemClassName={`menu__item menu__sign-up ${
          isHamburgerClicked ? "slide-top" : "slide-left-out-disappear absolute"
        }`}
        linkClassName={"menu__link"}
      />
    </ul>
  );
}

export default Menu;
