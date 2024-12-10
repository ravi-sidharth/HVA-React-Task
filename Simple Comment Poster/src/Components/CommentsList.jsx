import React from 'react'

function CommentsList({display}) {
  return (
    <ul>
        {display.map((comment,index)=> <li key={index}>{comment}</li>)}
    </ul>
  )
}

export default CommentsList
