import React from "react";

const Post = ({ props }) => {
  return (
    <a className="post post__link" href={props.link}>
      <div className="post__card">
        <p className="post__heading">{props.heading}</p>
        <span className="post__date">{props.date}</span>
      </div>
    </a>
  );
};

export default Post;
