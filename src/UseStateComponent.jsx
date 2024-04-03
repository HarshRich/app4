import { useState } from "react";

export const UseStateComponent=()=>
{

const[value,setValue]=useState(0);
const increaseValue = ()=>{
setValue(value+1);
}
const decreaseValue = ()=>{
    setValue(value-1);
    }

return (
<div>
<div><h1 style={{color:'red', fontSize:100}}>{value}</h1></div>
<div>
<button onClick={increaseValue}>increase</button>
<button onClick={decreaseValue}>decrease</button>
<button onClick={()=>{setValue(0)}}>reset to 0</button>
</div>
</div>)
}