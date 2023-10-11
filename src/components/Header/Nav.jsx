import React from "react";

function Nav() {
  return (
    <nav className="header__nav">
      <ul className="menu">
        <li className="menu__item">
          <a href="#" className="menu__link">
            About Us
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Brands
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Commissions
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            News
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Contact Us
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Careers
          </a>
        </li>

        <li className="menu__item menu__login">
          {" "}
          <button>Log In</button>
        </li>
        <li className="menu__item menu__signUp">
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
