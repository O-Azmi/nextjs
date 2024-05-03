import React from "react";
import Post from './Post'
import classes from "./PostList.module.css"

export default function UnorderedList() {
  return (
    <ul className={classes.posts}>
      <Post author="Walid" text="Hi, I'm walid" />
      <Post author="Tyson" text="Hi, I'm Tyson" />
    </ul>
  );
}
