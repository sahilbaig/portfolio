import React from "react";
import "./icons.css"
import { v4 as uuidv4 } from 'uuid';
import { stockData } from "./icon-list";
const numbers= stockData
const listItems = numbers.map((numbers) =>
    <div key={uuidv4()} className="icon">
        <img    
            src={numbers.icon} 
            alt="why you do this to me"
            className="icon-img"
        >
         </img>
        <p>{numbers.iconText}</p> 
    </div>
); 


const Icons= ()=>{
   
    return(
        <div className="icon-box">    
            {listItems}
        </div>
    )
    
}

export default Icons;