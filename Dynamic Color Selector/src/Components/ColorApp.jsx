import React, { useState } from 'react'
import ColorSelector from './ColorSelector'
import ColorDisplay from './ColorDisplay'

function ColorApp() {

  const [color, setColor] = useState('gray'); 

  return (
    <div>
      <ColorSelector setColor={setColor} />
      <ColorDisplay color={color} />
    </div>
  )
}

export default ColorApp;
