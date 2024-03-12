import React from 'react'

function Hooks4() {
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
  const[text,setText]=React.useState();
  const handleChange=(e)=>{
    console.log(e.target.value);
    setText(e.target.value);
  }
  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('inc')}>Inc</button>
      <button type="button" className="btn btn-outline-primary" onClick={()=>handleButtonClick('dec')}>Dec</button>
      <input type="text" onChange={(e)=>handleChange(e)}/>
      <h2>{val}</h2>
      <h3>{text}</h3>
    </div>
  )
}

export default Hooks4
