
import { useEffect, useState } from "react";

export default function UseEffectOnce(){
    
    const [title,setTitle]=useState<string>('');

    

    useEffect(()=>{async function api(){
        const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json=await response.json();
        const title=json.title;
        setTitle(title);
    }
    api();},[]);
    
    return(
        <div>{title}</div>
    );


}