import { useDispatch } from "react-redux";
import ReadReducer from "./ReadReducer";
import { hellowrite } from "./TextReducer";

export default function WriteReducer(){

    const dispatch=useDispatch();

    return(
        <>
          <input type="text" onChange={e=>dispatch(hellowrite(e.target.value))}/>
          <ReadReducer/>
        </>
    );
}