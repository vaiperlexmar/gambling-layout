import React, { useEffect, useState } from "react";
import Menu from "../Header/Menu";
import Link from "../Link";
import Chips from "./Chips";
import WelcomeSection from "./Welcome";

function Main({ isHamburgerClicked, isMenuOpen }) {
  const [mainAnimation, setMainAnimation] = useState("slide-top");

  useEffect(() => {
    if (isHamburgerClicked) {
      setMainAnimation("slide-bottom");
      const timeout = setTimeout(() => {
        setMainAnimation("main_hidden");
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setMainAnimation("main_visible slide-top-in-appear");
      }, 500);
    }
  }, [isHamburgerClicked]);

  return (
    <>
      <div className="main-container">
        {isMenuOpen && (
          <Menu
            isHamburgerClicked={isHamburgerClicked}
            isMenuOpen={isMenuOpen}
          />
        )}

        <main className={`main ${mainAnimation}`}>
          <WelcomeSection />
        </main>
      </div>
    </>
  );
}

export default Main;
