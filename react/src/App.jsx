import React from 'react'
import PostList from './Components/PostList'
import MainHeader from  "./Components/MainHeader"
import { useState } from 'react';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function showModalHandler(){
    setModalIsVisible(true)
  }
  function hideModalHandler(){
    setModalIsVisible(false)
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
    </main>
    </>
  )
}

