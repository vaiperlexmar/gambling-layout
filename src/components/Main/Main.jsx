import React from "react";
import Menu from "../Header/Menu";
import Link from "../Link";
import Chips from "./Chips";

function Main({ isMenuOpen }) {
  return (
    <>
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />}

      <main className={`main ${isMenuOpen ? "main_hidden" : "main_visible"}`}>
        <section className="welcome">
          <div className="welcome__textbox">
            <h1 className="heading-primary">
              HOUSE OF <span style={{ color: "#478bf9" }}>GAMBLING</span>
            </h1>
            <p className="description">Raise your ROI with direct advertiser</p>
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
    </>
  );
}

export default Main;
