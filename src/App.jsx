
import { BodyComp } from "./BodyComp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { WeatherApi } from "./WeatherApi";
import { NavBar } from "./NavBar";
import { Profile } from "./Profile";
import { UseContext } from "./UseContext";
import React, { useState, createContext } from "react";
import { Changeprofile } from "./ChangeProfile.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQuery } from "./ReactQuery";



export const Appcontext=createContext()

function App() {
  const client=new QueryClient(
    {defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }}
  );
  const [username,setusername]=useState("Harshith")

  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Appcontext.Provider value={{username,setusername}}>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<BodyComp /> }/>
        <Route path="/weatherapi" element={<WeatherApi/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/useContext" element={<UseContext/>}/>
        <Route path="/ChangeProfile" element={<Changeprofile/>}/>
        <Route path="/ReactQuery" element={<ReactQuery/>}/>
      </Routes>
    </Router>
    </Appcontext.Provider>
    </QueryClientProvider>
  
    </div>
  );
}
export default App;
