import { useState } from 'react'
import './App.css'
import NameForm from './Commonents/NameForm'

function App() {
  const [name,setName]=useState("")
  const [displaynName,setDisplayName]=useState("")
  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()} action="">
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name'/>
        <button onClick={()=>setDisplayName(name)}>Submit</button>
      </form>
      
      <NameForm name={displaynName} />
    </> 
  )
}
export default App
