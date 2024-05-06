import React from "react";
import Post from './Post'
import classes from "./PostList.module.css"
import NewPost from "./NewPost";

export default function UnorderedList() {
  return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
      <Post author="Walid" text="Hi, I'm walid" />
      <Post author="Tyson" text="Hi, I'm Tyson" />
    </ul>
   </>
  );
}
