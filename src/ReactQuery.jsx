//Using React Query Hook
import Axios from "axios";
import { useQuery } from "@tanstack/react-query"

export const ReactQuery=()=>
{
    const {data,isLoading,refetch}=useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((response)=>response.data);
    })
    if(isLoading){
        return <h1>Loading.....</h1>
    }

    console.log(data)
    return (
        <div>
        <p>{data?.fact}</p>
        <button onClick={()=>refetch()}>Refetch</button>
        </div>
    )
}