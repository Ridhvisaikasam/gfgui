import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import HotelReducer from "./HotelReducer";
import TextReducer from "./TextReducer";
import UsersReducer from "./UsersReducer";

export const RootReducer=combineReducers({TextReducer,UsersReducer,HotelReducer});
export type AppState=ReturnType<typeof RootReducer>;

export const ConfigureStore=()=>{
    return createStore(RootReducer,{},devToolsEnhancer({}));
}

