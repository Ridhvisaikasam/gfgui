import { useSelector } from "react-redux";
import { AppState } from "./AppState";

export default function ReadReducer(){
    const select=useSelector((x:AppState)=>x.TextReducer);
     
    return(
        <div>{select.name}</div>
    );
}