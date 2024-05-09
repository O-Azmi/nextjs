import React from "react";
import Post from './Post'
import classes from "./PostList.module.css"
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from './Modal'

export default function UnorderedList({isPosting, onStopPosting}) {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ...existingPosts])
  }
  let modalContent;

  if (isPosting){
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />

      <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
      </Modal>
    )
  }

  return (
    <>
    {modalContent}
    {posts.length > 0 && (<ul className={classes.posts}>
    {posts.map((post) => <Post key={post.body} author={post.author} text={post.body}/>)}
    </ul>) }
    {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>There are no posts yet.</div>}
   </>
  );
}
