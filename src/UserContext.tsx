import { createContext, useEffect, useState} from "react";
import firebase from "firebase";
import LoadingSpinner from "./LoadingSpinner";

interface Iprops{
    children:React.ReactNode
}

export const Context=createContext<firebase.User | null>(null);

export default function UserContext(props:Iprops){

          const [user,setUser]=useState<firebase.User | null>(null);
          const [showLS,setShowLS]=useState<boolean>(true);

          useEffect(()=>{
            firebase.auth().onAuthStateChanged((user: firebase.User | null)=>{
                         setShowLS(true);
                         setUser(user);
                         setShowLS(false);
            })
          },[]);

          return(
            <Context.Provider value={user}>
                {!showLS&&props.children}
                {showLS&&<LoadingSpinner showBackDrop={false}/>}
            </Context.Provider>
          );

}