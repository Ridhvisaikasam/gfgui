import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotel{
    name:string,
    cuisines:string,
    featured_image:string,
    id:string
}

interface IHotelResponse{
    isLoading:boolean,
    hotels:IHotel[]
}

const initialstate:IHotelResponse={
    isLoading:false,
    hotels:[]
}

const HotelReducer=createSlice({
    name:"HotelReducer",
    initialState:initialstate,
    reducers:{
        started(state:IHotelResponse){
            state.isLoading=true;
        },
        completed(state:IHotelResponse,payLoad:PayloadAction<IHotel[]>){
            state.isLoading=false;
            state.hotels=payLoad.payload;
        }

    }
})

export const {started,completed}=HotelReducer.actions;

export default HotelReducer.reducer;