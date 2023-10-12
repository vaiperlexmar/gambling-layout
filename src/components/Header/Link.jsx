import React from "react";

function Link(props) {
  return (
    <a href={props.path} className="menu__link">
      <li className={props.className}>{props.linkName}</li>
    </a>
  );
}

export default Link;
