import React, { useEffect, useState } from "react";
import Menu from "../Header/Menu";
import Link from "../Link";
import Chips from "./Chips";

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
          <section className="welcome">
            <div className="welcome__textbox">
              <h1 className="heading-primary">
                HOUSE OF <span style={{ color: "#478bf9" }}>GAMBLING</span>
              </h1>
              <p className="description">
                Raise your ROI with direct advertiser
              </p>
              <Link
                linkName={"Become a partner"}
                path={"#"}
                className="welcome_link"
              ></Link>
            </div>

            <div className="welcome__chips">
              <Chips />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Main;
