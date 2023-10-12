import React from "react";
import Menu from "../Header/Menu";

function Main({ isMenuOpen }) {
  return (
    <main className={`main" ${isMenuOpen ? "main_hidden" : "main_visible"}`}>
      {isMenuOpen && <Menu />}
    </main>
  );
}

export default Main;
