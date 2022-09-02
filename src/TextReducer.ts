import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IData{
    name:string
}

const TextReducer=createSlice({
    name:"TextReducer",
    initialState:{name:''} as IData,
    reducers:{
        write(state:IData,action:PayloadAction<string>)
        {state.name=action.payload;},

        hellowrite(state:IData,action:PayloadAction<string>)
        {state.name="hi "+action.payload;}
    }
});

export const {write,hellowrite}=TextReducer.actions;
export default TextReducer.reducer;