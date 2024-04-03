import { ApiComponent } from "./ApiComponent";
import { ExcuseApi } from "./ExcuseApi";
import { PlanetComp } from "./PlanetComponent";
import { Harsh } from "./Harsh";
import HarshComponent from "./HarshComponent";
import { UseEffect } from "./UseEffect";
import { UseStateComponent } from "./UseStateComponent";
import { WeatherApi } from "./WeatherApi";
import { planet, student } from "./utils/mockData";
import { Appcontext } from "./App";
import { useContext } from "react";

export const BodyComp = () => {
const {username}=useContext (Appcontext)
  
  return(
    <div className="App">
    {/* {student.map((student) => (
      <Sai key={student.id} studentsName={student.Name} />
    ))}
    {student.map((student) => (
      <SaiComponent key={student.id} studentsList={student} />
    ))} */}

    {/* { 
    planet.map((x, index) => (<PlanetComp key={index} planetName={x} />))
    } */}
    {/* <h3>I'm Planet</h3>
    <PlanetComp/> */}

    {/* <UseStateComponent/> */}
    {/* <UseEffect/> */}
    <h2>This is homepage and user is {username}</h2>
    <ApiComponent/>
    {/* <ExcuseApi/> */}
    
  </div>
  )
  
  }