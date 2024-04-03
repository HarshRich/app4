import Axios from "axios";
import { useEffect, useState } from "react";

export const ExcuseApi = () => 
{
  const [GenExcuse, setExcuse] = useState("");
  
  const fetchexcuse=(excuse)=>
    {
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).
      then(
        (res) => {
          setExcuse(res.data[0].excuse)
          console.log(res.data[0])
          
        
        })
    }

  return (
    <div>
      <h1>Gen Excuse: {GenExcuse}</h1>
      <h1>Gen category: {}</h1>
      <button onClick={()=>fetchexcuse("party")}>Party</button>
      <button onClick={()=>fetchexcuse("family")}>Family</button>
      <button onClick={()=>fetchexcuse("office")}> Office</button>
    </div>
  )
}


