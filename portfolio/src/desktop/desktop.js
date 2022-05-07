import React, { useEffect, useState } from "react";
import "./desktop.css"
import Window from "../window/window";
import Icons from "../icons/icons";
import Newicons from "../icons/new-icons";
import { v4 as uuidv4 } from 'uuid';
const Desktop =() =>{

    const [desktopIcons,setDesktopIcons] = useState([]);
    const [windowList, setWindowList]=useState([]);


    return (
        <div className="fill-window" >
            <Icons></Icons>
            <div id="icon-tray">
                <li>ss</li>
            </div>
            <button onClick={()=>{
                
                console.log(desktopIcons)
            }}>
                Show desktop icons
            </button>
        </div>
        
    )
}

export default Desktop