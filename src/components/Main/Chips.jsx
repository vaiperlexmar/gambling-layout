import React from "react";
import crown from "../../assets/Chips/crown.svg";
import dollar_long from "../../assets/Chips/dollar_long.svg";
import m_blue from "../../assets/Chips/m_blue.svg";
import m_green from "../../assets/Chips/m_green.svg";
import m_white from "../../assets/Chips/m_white.svg";
import shield from "../../assets/Chips/shield.svg";
import soccer_blue from "../../assets/Chips/soccer_blue.svg";
import soccer_white from "../../assets/Chips/soccer_white.svg";
import timer_green from "../../assets/Chips/timer_green.svg";
import world_long from "../../assets/Chips/world_long.svg";

function Chips() {
  return (
    <>
      <div className="chips chips_1">
        <div className="chipsbar scroll">
          <div className="chip">
            <img src={crown} />
          </div>
          <div className="chip">
            <img src={m_blue} />
          </div>
          <div className="chip">
            <img src={soccer_blue} />
          </div>
          <div className="chip">
            <img src={shield} />
          </div>
          <div className="chip">
            <img src={shield} />
          </div>
        </div>

        <div className="chipsbar scroll">
          <div className="chip">
            <img src={crown} />
          </div>
          <div className="chip">
            <img src={m_blue} />
          </div>
          <div className="chip">
            <img src={soccer_blue} />
          </div>
          <div className="chip">
            <img src={shield} />
          </div>
          <div className="chip">
            <img src={shield} />
          </div>
        </div>
      </div>

      <div className="chips chips_2">
        <div className="chipsbar scroll_reversed">
          <div className="chip">
            <img src={m_white} />
          </div>
          <div className="chip">
            <img src={timer_green} />
          </div>
          <div className="chip">
            <img src={crown} />
          </div>
          <div className="chip">
            <img src={world_long} />
          </div>
          <div className="chip">
            <img src={soccer_white} />
          </div>
        </div>

        <div className="chipsbar scroll_reversed">
          <div className="chip">
            <img src={m_white} />
          </div>
          <div className="chip">
            <img src={timer_green} />
          </div>
          <div className="chip">
            <img src={crown} />
          </div>
          <div className="chip">
            <img src={world_long} />
          </div>
          <div className="chip">
            <img src={soccer_white} />
          </div>
        </div>
      </div>

      <div className="chips chips_3">
        <div className="chipsbar scroll">
          <div className="chip">
            <img src={soccer_blue} />
          </div>
          <div className="chip">
            <img src={m_green} />
          </div>
          <div className="chip">
            <img src={shield} />
          </div>
          <div className="chip">
            <img src={dollar_long} />
          </div>
        </div>

        <div className="chipsbar scroll">
          <div className="chip">
            <img src={soccer_blue} />
          </div>
          <div className="chip">
            <img src={m_green} />
          </div>
          <div className="chip">
            <img src={shield} />
          </div>
          <div className="chip">
            <img src={dollar_long} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chips;
