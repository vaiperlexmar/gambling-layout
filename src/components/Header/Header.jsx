import React from "react";
import Hamburger from "./Hamburger";
import LanguageButton from "./LanguageButton";

function Header({ isMenuOpen, handleMenuClick }) {
  return (
    <header className="header">
      <span className="header__logo material-symbols-outlined">house</span>
      <nav className="header__nav">
        <LanguageButton />
        <Hamburger handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
}

export default Header;
