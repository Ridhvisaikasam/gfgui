import { useState } from "react";

export default function ListNote(){
    const [notes,setNotes]=useState<string[]>([]);
    const [currentnotes,setcurrentNotes]=useState<string>('');

    const updateNotes=()=>{
        setNotes([...notes,currentnotes])
    }

    const deleteNotes=(index:number)=>{
         const clone=[...notes];
         setNotes(clone.filter((x,i)=>i!==index));
    }

    const renderListItem=(value:string,index:number)=>{
            return(
                <li key={index}>
                      <div>{value}</div>
                      <button onClick={()=>deleteNotes(index)}>delete note</button>
                </li>
            );
    }
    
    return(
           <>
              <input type="text" onChange={(e)=>setcurrentNotes(e.target.value)}/>
              <button onClick={updateNotes}>add note</button>
               <ul>
                     {notes.map((x,i)=><li key={i}>{x}</li>)}
                     {notes.map(renderListItem)}
               </ul>
           </>
    );

}