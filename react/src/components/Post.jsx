import React from "react";

export default function Post(props) {
    
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.content}</p>
    </div>
  );
}
