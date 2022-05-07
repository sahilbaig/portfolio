import React, { useState } from "react";
import "./icons.css"
import { v4 as uuidv4 } from 'uuid';
import { stockData } from "./icon-list";
import Window from "../window/window";
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

var listOfWindows=[]


const openAWindow =(message) =>{
    const windowElement= <Window message="element"/>
    listOfWindows.push(windowElement)
}
const Icons= ()=>{

    
    const doubleClick=()=>{
        console.log("open a windows")
        openAWindow("element")
        // open a window
    }
    
   
    return(
        <>
        <div className="icon-box" onDoubleClick={doubleClick}>    
            {listItems}
            <div>
                
            </div>
        </div>
        </>
    )
    
}

export default Icons;