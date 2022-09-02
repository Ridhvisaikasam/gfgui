import { createContext, useState } from "react";
import ReadContext from "./ReadContext";

interface Iuserdetails{
    email:string
}

export const usercontext=createContext<Iuserdetails>({email:''});

export default function WriteContext(){

    const [email,setEmail]=useState<string>('');
     

    
    return(
        <>
           <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
            <usercontext.Provider value={{email:email}}>
                 <ReadContext/>
            </usercontext.Provider>

        </>
    );

}