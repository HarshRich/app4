import Axios, { formToJSON } from "axios";
import { useEffect, useState } from "react";

export const WeatherApi=()=>
{
const[weather,setweather]=useState("") 
// const url="https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f3183ec332327d4ab2ffdabfccd6274a";

// useEffect(()=>{ Axios.get(url).then(
//     (res) => 
//     {
//     setweather(res.data)
//     console.log(res.data)
  
//   })
// },[])

const [text,settext]=useState("")
const [location,setlocation]=useState("")

const fetchdata=()=>
    {
        let api="f3183ec332327d4ab2ffdabfccd6274a"
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${api}`).
        then(
          (result) => {
            settext(result.data)
            console.log(result.data)
          })
          setlocation('')
        
    }
  


return(
    
    <div className="">
      <h1>Weather Api</h1>
       <input value={location}
        onChange={(event) => {
          setlocation(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") 
          {
              fetchdata()
            }}}
        // onKeyUp={fetchdata()}
        // onDragEnter={()=>{
        //   if(event==="Enter")
        //   {
        //     fetchdata()
        //   }}}
      />
      <h1>{location}</h1>
      <button onClick={()=>{fetchdata()}}>search weather</button>
      <h1>Location:{text.name}</h1>
      {text.name ? <h1>{text.main.temp}°F</h1>:null}
      {text.weather?<h3>{text.weather[0].main}</h3>:null}
    </div>
    )
}