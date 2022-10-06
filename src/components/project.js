import { useState } from "react"

function Project (){

    const [status,setStatus]=useState(false)
    const [password,setPassword]=useState("")
    const [content,setContent]=useState("")
    
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    const showContent = () =>{
        if(password=="hello"){
            setContent("wow")
        }
        else{
            setContent("enter password")
        }
    } 
    return(
        <div>
            <button onClick={()=>{
                showContent()
            }}>Click kar ke dekh na</button>

            <input type="text" value={password} onChange={handlePassword}></input>
            <h1>{content}</h1>

        </div>
    )
}

export default Project