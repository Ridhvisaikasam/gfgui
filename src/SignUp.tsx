import firebase from "firebase";
import Authentication from "./Authentication";

export default function SignUp(){

    async function onSubmitClick(email:string,password:string,displayName?:string){

       try{
        const account=await firebase.auth().createUserWithEmailAndPassword(email,password);
        await account?.user?.updateProfile({displayName});
        return;
       }
       catch(e:any)
       {
        console.log(e);
        return e.message;
       }

    }

    return(
        <Authentication title="SignUp Page" showSignUpButton={false} showLogInButton={true} showName={true} onSubmitClick={onSubmitClick}/>
    );
}