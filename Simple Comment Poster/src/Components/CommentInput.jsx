import React from "react";
function CommentInput({comment,setComment,display,setDisplay }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // handleAddComment()
      }}
    >
      <input
        onChange={(e) => setComment(e.target.value)}
        type="text"
        required
      />
      
      <button onClick={()=>setDisplay([...display,comment])} type="submit">button</button>
    </form>
  );
}

export default CommentInput;
