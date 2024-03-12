import React from 'react';
import './practice1.css'
function practice1(props){
    return(
        <div style={{border:'1px solid black',margin:'5px'}} className='f'>Hello {props.name1}</div>
    );
}

export default practice1;