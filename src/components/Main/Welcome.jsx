import React from "react";
import Chips from "./Chips";
import Link from "../Link";
import BackgroundImg from "../../assets/Main/Welcome_dot.svg";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div className="welcome__textbox">
        <img className="welcome__bg" src={BackgroundImg} />
        <h1 className="heading-primary">
          HOUSE OF <span style={{ color: "#478bf9" }}>GAMBLING</span>
        </h1>
        <p className="description">Raise your ROI with direct advertiser</p>
        <Link
          linkName={"Become a partner"}
          path={"#"}
          linkClassName="welcome__link"
          itemClassName="welcome__btn"
        ></Link>
      </div>

      <div className="welcome__chips">
        <Chips />
      </div>
    </section>
  );
};

export default WelcomeSection;
