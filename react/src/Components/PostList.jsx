import React from "react";
import Post from './Post'
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from './Modal'

export default function UnorderedList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalHandler(){
    setModalIsVisible(false);
  }
  function bodyChangeHandler(e){
    setEnteredBody(e.target.value);
  }
  
  function authorChangeHandler(e){
    setEnteredAuthor(e.target.value);
  }

  let modalContent;

  if (modalIsVisible){
    modalContent = (
      <Modal onClose={hideModalHandler}>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
      </Modal>
    )
  }

  return (
    <>
    {modalContent}
    <ul className={classes.posts}>
      <Post author={enteredAuthor} text={enteredBody} />
    </ul>
   </>
  );
}
