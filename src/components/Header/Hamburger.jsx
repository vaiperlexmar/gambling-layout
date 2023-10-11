import React from "react";
import { useState } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger">
      <div className="burger burger1"></div>
      <div className="burger burger2"></div>
      <div className="burger burger3"></div>
    </div>
  );
}
