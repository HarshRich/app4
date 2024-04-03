import { useState } from "react"
import { Appcontext } from "./App";
import { useContext } from "react";

export const Changeprofile=()=>{
const {username,setusername}=useContext (Appcontext)

const [NewUsername,setNewUsername]=useState("")

const fetchNewUserName=()=>{
setusername(NewUsername)
}
    
    return(
        <div>
            <h3>Hi {username}, Change your Profile name here.</h3>
            <input value={NewUsername} onChange={
                (event)=>
                {
                    setNewUsername(event.target.value)
                }
                }
                onKeyDown={(event) => {
                    if (event.key === "Enter") 
                    {
                    fetchNewUserName()
                      }}}
            />

        </div>
    )
}