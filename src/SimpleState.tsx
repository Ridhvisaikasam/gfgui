import React from "react";
import {  useNavigate } from "react-router-dom";
import Gbutton from "./Gbutton";

export default function SimpleState(){
    const[count,setCount]=React.useState<number>(0);
    const history=useNavigate();
    return(
        <div>
    <Gbutton name="count" label={count.toString()} onClick={()=>setCount(count+1)} />
    <button onClick={()=>history("/RouteC")}>go to route c</button>
    <button onClick={()=>history(-1)}>take us back</button>
    </div>
    );
}