import { useEffect, useState } from "react";
import React from "react";

export const UseEffect = () => {
  const [ShowText, setShowText] = useState(false);
  useEffect(()=>{
    console.log("Mounted")
    return()=>{
    console.log("UnMounted")
    };
},[])

  return (
    <div>
      <h1>UseEffect Component</h1>
      <button
        onClick={() => {
          setShowText(!ShowText);
        }}
      >
        ShowText
      </button>
      {ShowText && <Text />}
    </div>
  );
};

const Text = () => 
{
  const [Inputtext, settext] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          settext(event.target.value);
        }}
      />
      <h1>{Inputtext}</h1>
    </div>
  );
};
