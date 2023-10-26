import React from "react";

function Link(props) {
  return (
    <a href={props.path} className={props.linkClassName}>
      <li className={props.itemClassName}>{props.linkName}</li>
    </a>
  );
}

export default Link;
