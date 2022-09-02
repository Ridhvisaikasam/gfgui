import {useEffect, useState} from "react";

interface itodo
{
  title:string
}

export default function UseEffectMultiple(){
    const [index,setIndex]=useState<number>(1);
    const[title,setTitle]=useState<string>('');

    const apiv=()=>{async function api(){
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/'+index);
        const json:itodo=await response.json();
        setTitle(json.title)}
    api();}

    useEffect(apiv,[index]);

    return(
        <>
        <input type="text" onChange={(e)=>setIndex(parseInt(e.target.value))}/>
        <div>{title}</div>
        </>
    );
}

