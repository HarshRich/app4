import Axios from "axios"
import { useEffect, useState } from "react"
export const ApiComponent = () => 
{
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const [catfact, setcatfact] = useState("")
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setcatfact(res.data.fact)
      console.log(res.data.fact)
    })
  }, [])

  return (
    <div>
      <h1>Api Component object in console</h1>
      <p>{catfact}</p>
    </div>
  )



}