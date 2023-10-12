import React from "react";

function Link(props) {
  return (
    <li className="menu__item">
      <a href={props.path} className="menu__link">
        {props.linkName}
      </a>
    </li>
  );
}

export default Link;
