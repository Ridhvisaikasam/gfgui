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
    data:{hotelsx:IHotel[]};
}

export default function Home(){

    const style=useStyle();

    const [searchString , setSearchString]=useState<string>('');

    const dispatch=useDispatch();
    const select=useSelector((x:AppState)=>x.HotelReducer);
    const apiv=()=>{
        async function api(){

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const graphql = JSON.stringify({
            query: "{\n  hotelsx{\n    id\n    name\n    cuisines\n    featured_image\n  }\n}",
            variables: {}
             })
            const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            };

            const response=await fetch("https://shielded-island-97146.herokuapp.com/graphql", requestOptions);

            //const response=await fetch("/hotel.json");  --> call for static file done without backend
            const json: IFile=await response.json(); 
            dispatch(completed(json.data.hotelsx));
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