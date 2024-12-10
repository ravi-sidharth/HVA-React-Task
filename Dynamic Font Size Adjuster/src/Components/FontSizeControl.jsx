function FontSizeControl({size,setSize}) {
  return (
    <div className="flex gap-5 ">
        <button onClick={()=>setSize(prev=>prev+10)}>Increase</button>
        <button onClick={()=>setSize(prev=>prev-10)}>Decrease</button>
    
     <div>
     <label htmlFor="Slider">Font Size: {size}px</label>
      <input
        id="Slider"
        type="range"
        min="10"
        max="100"
        value={size}
        onChange={(e)=>setSize(e.target.value)}
      />
     </div>
    </div>
  )
}

export default FontSizeControl
