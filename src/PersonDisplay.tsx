import { useEffect, useState } from "react";

interface Iperson{
    id:number,first_name:string,last_name:string,avatar:string,email:string
}

export default function PersonDisplay(){

    const [search,setSearch]=useState<string>('');
    const [persons,setPerson]=useState<Iperson[]>([]);

    const apiv=()=>{
        async function api(){
            const response=await fetch("https://reqres.in/api/users");
            const json:{data : Iperson[]}=await response.json();
            setPerson(json.data);
        }
        api();
    }    

    useEffect(apiv,[]);

    

    const filterperson=(person:Iperson)=>{
                    
         const names=[person.first_name.toLowerCase(),person.last_name.toLowerCase()];
         return names.some(x=>x.includes(search.toLowerCase()));
    }
    function renderperson(person:Iperson,index:number){
 
        return(
                <div key={index}>
                    <img src={person.avatar} alt={person.first_name}/>
                     <div>{person.first_name+" "+person.last_name}</div>      
                </div>
                    
               );
    
    }

    return(
       <>
         <input type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
         <div className="gridcontainer">{persons.filter(filterperson).map(renderperson)}</div>
       </>
    );

}


