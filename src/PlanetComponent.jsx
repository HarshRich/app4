import { planet } from "./utils/mockData";


export const PlanetComp = (props) => {

  return (
    <div>
    {planet.map((planet,key)=>planet.isGasPlanet && <h1>{planet.name}</h1>)}
    </div>
  );
}