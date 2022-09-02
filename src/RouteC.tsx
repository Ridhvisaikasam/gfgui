import { useNavigate } from "react-router-dom";

interface IProps
{
    name:string
}

export default function RouteC(props : IProps){
    const history=useNavigate();
    return(
        <div className="App">
             {"hi "+props.name}
             <button onClick={()=>history("/SimpleState")}>go to route simplestate</button>
             <button onClick={()=>history(-1)}>take us back</button>
        </div>
    );
}