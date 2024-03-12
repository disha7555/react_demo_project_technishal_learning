import React from 'react';
import Practice1 from './practice1'
function practice(props){
    const{name,course}=props;//destructuring
        return(
        <>
        <div>
        Hello,this is practice of {course} by {name}
        </div>
        <Practice1 name1={name}/>
        </>
        );
}

export default practice;