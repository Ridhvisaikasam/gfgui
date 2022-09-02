import { useParams } from "react-router-dom";

export default function RouteB()
{
   const obj=useParams<{name:string}>();
   return(
   <div>
    {"hello "+obj.name}
   </div>
   );
}