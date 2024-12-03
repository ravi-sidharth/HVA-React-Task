import React from 'react'

function TeaDisplay({Name,Origin,Description}) {
  return (
    <div className=' m-4 p-2 w-60 h-40 bg-zinc-300 rounded-lg '>
        <p>Type Of Tea: {Name} </p>
        <p>Origin: {Origin} </p>
        <p>Description: {Description} </p>
   </div>
  )
}

export default TeaDisplay
