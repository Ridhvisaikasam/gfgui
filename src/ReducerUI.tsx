import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { IPerson, write } from "./UsersReducer";

export default function ReducerUI()
{
    const dispatch=useDispatch();
    const select=useSelector((x:AppState)=>x.UsersReducer);

    const apiv=()=>{
        async function api(){
            const response=await fetch("https://reqres.in/api/users");
            const json:{data:IPerson[]}=await response.json();
            dispatch(write(json.data));
        }
        api();
    }

    useEffect(apiv,[dispatch]);

    function renderUser(person:IPerson,index:number){

          return(
            <div key={index}>
                <img src={person.avatar} alt={person.first_name}/>
                <div>{person.first_name+" "+person.last_name}</div>
            </div>
          );

    }

    return(
        <div className="gridcontainer">
        {select.map(renderUser)}
        </div>
    );

}