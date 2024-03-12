import React from 'react'

function hooks1() {
  const handleButtonClick=(type)=>{
    console.log(type)
  }
  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('blue')}>Blue</button>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('red')}>Red</button>
    </div>
  )
}

export default hooks1
