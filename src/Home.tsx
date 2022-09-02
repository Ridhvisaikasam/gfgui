import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import Hotelcard from "./HotelCard";
import { completed, IHotel, started } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";
import TopBar from "./TopBar";

const useStyle=makeStyles({
    grid:{marginTop:'75px',width:'100%'}
});

interface IFile{
    restaurant:IHotel,
}

export default function Home(){

    const style=useStyle();

    const [searchString , setSearchString]=useState<string>('');

    const dispatch=useDispatch();
    const select=useSelector((x:AppState)=>x.HotelReducer);
    const apiv=()=>{
        async function api(){
            const response=await fetch("/hotel.json");
            const json: IFile[]=await response.json(); 
            dispatch(completed(json.map(x=>x.restaurant)));
     }
     dispatch(started());
     api();
    }
    useEffect(apiv,[dispatch]);


    
    return(
        <>
          <TopBar searchString={searchString} setSearchString={setSearchString}/>
          {select.isLoading&&<LoadingSpinner showBackDrop={true}/>}
          <Grid container spacing={10} className={style.grid}>
              {!select.isLoading&&select.hotels.filter(y=>y.name.toLowerCase().includes(searchString.toLowerCase())).map(x=><Grid item><Hotelcard {...x}/></Grid>)}
          </Grid>
        </>
    );
}