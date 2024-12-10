import React, { useState } from 'react'
import CommentInput from './CommentInput'
import CommentsList from './CommentsList'

function CommentApp() {
    const [comment, setComment] = useState("")
    const [display,setDisplay]= useState([])

    // const handleAddComment = () => {
    //     if (comment.trim !== '') { 
    //       setDisplay([...display, comment]); 
    //       setComment('');
    //     }
    //   };
    
  return (
    <div>
        <CommentInput comment={comment}  setComment={setComment} display={display} setDisplay={setDisplay}/>
        <CommentsList display={display} />
    </div>
  )
}

export default CommentApp
