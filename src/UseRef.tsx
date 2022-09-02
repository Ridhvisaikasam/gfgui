import { useRef } from "react";

export default function UseRef(){

    const refe=useRef<HTMLInputElement>(null);

    const oncli=()=>{
        alert(refe.current?.id! + " " +refe.current?.value);
    }

    return(
        <>
          <input type="text" ref={refe} id="hello"/>
          <button onClick={oncli}>submit</button>
        </>
    );    
}