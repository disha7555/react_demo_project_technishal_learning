import React from 'react'

function Hooks3() {
    const[val,setval]=React.useState(0);
  const handleButtonClick=(type)=>{
    console.log(type)
    if(type==='inc'){
       
        setval(val+1);
       
    }
    if(type==='dec' && val>0){
    
        setval(val-1);
        
    }
  }
  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('inc')}>Inc</button>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('dec')}>Dec</button>
      <h2>{val}</h2>
    </div>
  )
}

export default Hooks3
