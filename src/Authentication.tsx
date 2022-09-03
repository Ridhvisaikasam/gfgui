import { Fab, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const useStyles=makeStyles({
    parentcontainer:{height :'100%',width:'100%' ,display:'flex',justifyContent:'center',alignItems:'center'},
    container:{ width: '50%',display:'flex',gap:'10px',flexDirection:'column'},
    buttons:{display:'flex',gap:'10px',justifyContent:'flex-end'},
    title:{display:'flex',justifyContent:'center'},
    message:{display:'flex',justifyContent:'center',color:'blue'},
    errorMessage:{color:'red'}
})

interface IAuthenticationProps{
        title: string,
        message:string,
        showSignUpButton?:boolean,
        showLogInButton?:boolean,
        showHomeButton?:boolean,
        showName?:boolean,
        onSubmitClick:(email:string,password:string,displayName?:string)=>Promise<string>,
}

interface IAuthenticationForm{
      name:string,
      email:string,
      password:string
}

export default function Authentication(props:IAuthenticationProps){

    const history=useNavigate();
    const {register,reset,handleSubmit,formState}=useForm<IAuthenticationForm>();
    const [errorMessage,setErrorMessage]=useState<string>("");
    const [loadingSpinner,setLoadingSpinner]=useState<boolean>(false);
    const style=useStyles();

    async function onClickSubmit(data:IAuthenticationForm){
          setLoadingSpinner(true);
          const message=await props.onSubmitClick(data.email,data.password,data.name);
          setLoadingSpinner(false);
          if(message){setErrorMessage(message);}
          else{history("/Home");}
    }

    return(
        <div className={style.parentcontainer}>
        <form className={style.container}>
           <Typography variant="h3" className={style.title}>{props.title}</Typography>
           <div className={style.buttons}>
           <Typography variant="h5" className={style.message}>{props.message}</Typography>
                {props.showSignUpButton&&<Fab variant="extended" onClick={()=>history("/SignUp")}>Sign Up Page</Fab>}
                {props.showLogInButton&&<Fab variant="extended" onClick={()=>history("/LogIn")}>Log In Page</Fab>}
           </div>
           {props.showName&&<TextField variant="outlined" placeholder="name" type="name" 
                 {
                    ...register("name",  
                    {required:{value:true,message:"name is a required field"},
                    minLength:{value:4,message:"name shld be min 4 characters"}} )
                 }
                 error={formState.errors?.name!==undefined}
                 helperText={formState.errors?.name?.message}
           />}
           <TextField variant="outlined" placeholder="email" type="email"
                 {
                    ...register("email", 
                     {required:{value:true,message:"email is a required field"},
                     pattern:{value:/[\w.]+@\w+\.[\w.]+/,message:"email invalid"}} )
                 }
                 error={formState.errors?.email!==undefined}
                 helperText={formState.errors?.email?.message}
           />
           <TextField variant="outlined" placeholder="password" type="password"
                 {
                    ...register("password",  
                    {required:{value:true,message:"password is a required field"},
                    minLength:{value:6,message:"password shld be min 6 characters"}} )
                 }
                 error={formState.errors?.password!==undefined}
                 helperText={formState.errors?.password?.message}
           />
            <div className={style.buttons}>
                <Fab color="primary" variant="extended" onClick={handleSubmit(onClickSubmit)}>Submit</Fab>
                <Fab color="secondary" variant="extended" onClick={()=>reset()}>Reset</Fab>
                {props.showHomeButton&&<Fab variant="extended" onClick={()=>history("/")}>Home</Fab>}
            </div>
            {loadingSpinner && <LoadingSpinner showBackDrop={true}/>}
            {errorMessage && <Typography variant="h5" id="errorMessage" className={style.errorMessage}>{errorMessage}</Typography>}
        </form>
        </div>
    );
}