import React from "react";
import Link from "./Link";

function Menu() {
  return (
    <ul className="menu">
      <Link linkName={"About Us"} path={"#"} className="menu__item" />
      <Link linkName={"Brands"} path={"#"} className="menu__item" />
      <Link linkName={"Commissions"} path={"#"} className="menu__item" />
      <Link linkName={"News"} path={"#"} className="menu__item" />
      <Link linkName={"Contact Us"} path={"#"} className="menu__item" />
      <Link linkName={"Careers"} path={"#"} className="menu__item" />

      <li className="menu__item menu__login">
        {" "}
        <button>Log In</button>
      </li>
      <li className="menu__item menu__signUp">
        <button>Sign Up</button>
      </li>
    </ul>
  );
}

export default Menu;
