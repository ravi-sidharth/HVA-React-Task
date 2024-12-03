import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TeaDisplay from './Components/TeaDisplay'
import MenuItem from './Components/MenuItem'

function App() {
  const Tea = [
    {name:"Black Tea", origin:"Himachal", description:"It's improve digestion system"},
    {name:"Green Tea", origin:"Delhi", description:"It's bitter taste"},
    {name:"Ice Tea", origin:"UttarPradesh", description:"It's cold tea like coffee"},
  ]

    const [isOn, setIsOn] = useState(false);
  
    const toggle = () => {
      setIsOn(prevState => !prevState);
    };

    const Menu = [
      {name:"Pizza", price:299, description:"It's improve digestion system"},
      {name:"Burger", price:199 , description:"It's bitter taste"},
      {name:"Roll", price:49, description:"It's cold tea like coffee"},
    ]
  

  return (
     <> 
     <div className='flex flex-wrap'>
      {Tea.map(ele=><TeaDisplay Name={ele.name} Origin={ele.origin} Description={ele.description} />)}
      </div>

      <div>
      <button className='ml-4 py-1 px-2 bg-blue-500 rounded-lg' onClick={toggle}>
        {isOn ? 'On' : 'Off'}
      </button>
      </div>

      {Menu.map(ele=><MenuItem Menu={ele}/>)}
     </>
     
     
  )
}

export default App
