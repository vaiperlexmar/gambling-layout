import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header onMenuClick={toggleMenu} isMenuOpen={isMenuOpen} />
      <Main isMenuOpen={isMenuOpen} />
    </>
  );
}

export default App;
