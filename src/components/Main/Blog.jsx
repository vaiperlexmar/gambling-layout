import React, { useEffect, useRef } from "react";
import Post from "./Post";
import Scrollbar from "smooth-scrollbar";
import BackgroundImg from "../../assets/Main/Blog_Dot_Light.svg";

const Blog = ({ posts }) => {
  const postsRef = useRef(null);

  const scrollBarOptions = {
    damping: 0.1,
    thumbMinSize: 7,
  };

  useEffect(() => {
    if (postsRef.current !== null) {
      Scrollbar.init(document.querySelector(".posts"), scrollBarOptions);
    }
  });

  return (
    <section className="blog">
      <h2 className="heading-secondary">Blog</h2>

      <div className="posts" ref={postsRef}>
        {posts.map((post, index) => (
          <Post props={post} key={index} />
        ))}
      </div>

      <img className="blog__bg" src={BackgroundImg} />
    </section>
  );
};

export default Blog;
