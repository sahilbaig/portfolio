import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Project (){
    const [password,setPassword]=useState(false)
    
    const handlePassword =(e)=>{
        setPassword(e.target.value)
        
    }
    
    const showContent = () =>{
        if(password=="hello"){
            setContent("wow")
        }
    } 



    const [content,setContent]=useState()
    
    
    


    
    return(
            <div id="password-field">
                <div>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={(e)=>{
                        handlePassword(e)
                    }}
                />

                <Button
                    onClick={()=>{
                        showContent()
                    }
                    }
                >Reveal content
                </Button>
                </div>
                

                <div>
                    {content}
                </div>
                
            </div>
    )
}

export default Project