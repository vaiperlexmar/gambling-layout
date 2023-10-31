import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);

  const handleMenuClick = () => {
    setHamburgerClicked(!isHamburgerClicked);

    isMenuOpen
      ? setTimeout(() => setIsMenuOpen(!isMenuOpen), 500)
      : setTimeout(() => setIsMenuOpen(!isMenuOpen), 500);
  };

  return (
    <>
      <Header handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
      <Main isHamburgerClicked={isHamburgerClicked} isMenuOpen={isMenuOpen} />
      <Footer isHamburgerClicked={isHamburgerClicked} isMenuOpen={isMenuOpen} />
    </>
  );
}

export default App;
