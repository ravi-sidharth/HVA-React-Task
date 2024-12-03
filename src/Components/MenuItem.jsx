import React from 'react'

function MenuItem({Menu}) {
    console.log(Menu)
    const {name,price,description} = Menu
  return (
        <div className='m-4 p-2 w-60 h-40 bg-zinc-300 rounded-lg '>
        <p>Name Of Menu: {name} </p>
        <p>Price: {price} </p>
        <p>Description: {description} </p>
   </div>
  )
}

export default MenuItem
