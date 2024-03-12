import React from 'react'

function Hooks2() {
    const[val,setval]=React.useState('black');
  const handleButtonClick=(type)=>{
    console.log(type)
    if(type==='blue'){
        setval('blue');
    }
    if(type==='red'){
        setval('red');
    }
  }
  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('blue')}>Blue</button>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('red')}>Red</button>
      <h2>color is {val}</h2>
    </div>
  )
}

export default Hooks2
