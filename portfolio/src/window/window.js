import React from "react"
import { useState } from "react"

const Window = (message) =>{
    const [windowData, setWindowData]=useState(false) 
    return (
        <h1>{message}</h1>
    )
}

export default Window