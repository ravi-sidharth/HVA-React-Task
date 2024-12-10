import React from 'react'
import FontSizeControl from './FontSizeControl'
import TextDisplay from './TextDisplay'
import { useState } from 'react'

function FontSizeApp() {
    const [size,setSize]=useState(0)

  return (
    <div>
      <FontSizeControl size={size} setSize={setSize}/>
      <TextDisplay size={size} />
    </div>
  )
}

export default FontSizeApp
