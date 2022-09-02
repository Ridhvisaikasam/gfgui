import firebase from "firebase";
import Authentication from "./Authentication";

export default function LogIn(){

    async function onSubmitClick(email:string,password:string){
        try{
           const account=await firebase.auth().signInWithEmailAndPassword(email,password);
        }
        catch(e:any){
            console.log(e);
            return e.message;
        }

    }

    return(
        <Authentication title="LogIn Page" showSignUpButton={true} showLogInButton={false} showName={false} onSubmitClick={onSubmitClick}/>
    );
}