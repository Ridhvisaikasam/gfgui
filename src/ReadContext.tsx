import { useContext } from "react";
import { usercontext } from "./WriteContext";

export default function ReadContext(){

    const data=useContext(usercontext);

    return(
        <div>{data.email}</div>
    );

}