import React from "react";
import YouTube from "react-youtube";

import { Appcontext } from "./App";
import { useContext } from "react";

export const Profile=()=>{
    const {username}=useContext (Appcontext)
    return(
        <div>
            <h2>Hi {username}, Here's your video!</h2>
            <YouTube videoId="Ktvr9NZy29k" />

        </div>
    )
}




