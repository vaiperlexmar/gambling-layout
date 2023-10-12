import React from "react";
import LanguageButtonIcon from "../../assets/Header/LanguageButtonIcon.svg";

export default function LanguageButton() {
  return (
    <button className="button lang-button">
      <img src={LanguageButtonIcon} />
    </button>
  );
}
