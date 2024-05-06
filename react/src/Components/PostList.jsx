import React from "react";
import Post from './Post'
import classes from "./PostList.module.css"
import NewPost from "./NewPost";

export default function UnorderedList() {
  const [enteredBody, setEnteredBody] = useState("");

  
  function bodyChangeHandler(e){
    setEnteredBody(e.target.value)
  }
  
  function authorChangeHandler(e){
    setEnteredBody(e.target.value)
  }

  return (
    <>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    <ul className={classes.posts}>
      <Post author="Walid" text="Hi, I'm walid" />
      <Post author="Tyson" text="Hi, I'm Tyson" />
    </ul>
   </>
  );
}
