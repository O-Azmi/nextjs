import React from "react";
import Post from './Post'
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import { useState } from "react";

export default function UnorderedList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  
  function bodyChangeHandler(e){
    setEnteredBody(e.target.value);
  }
  
  function authorChangeHandler(e){
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    <ul className={classes.posts}>
      <Post author={enteredAuthor} text={enteredBody} />
    </ul>
   </>
  );
}
