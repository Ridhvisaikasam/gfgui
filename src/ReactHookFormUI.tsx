import {useForm} from "react-hook-form"

interface IStudent{
    name:string,
    email:string,
    password:string
}
export default function ReactHookFormUI(){
    
    const {register,handleSubmit,getValues,formState,reset}=useForm<IStudent>();

    const onSubmit=(data:IStudent)=>{
        alert(data.name+" "+data.password);
        alert(getValues("email"));
    }
    
    return(
        <form>

             <input type="text" placeholder="name" {...register("name" , 
             {
                required:{value:true,message:"name is a required field"},
                minLength:{value:4,message:"name minimum length must be 4"}
            
            }
             )}/>

             <input type="email" placeholder="email" {...register("email",
             {
                pattern:{value: /[\w.]+@\w+\.[\w.]+/,message:"invalid email"}
             }
             )}/>

             <input type="password" placeholder="password" {...register("password")}/>

             <button onClick={handleSubmit(onSubmit)}>submit</button>
             <button onClick={()=>reset}>reset</button>

             {formState.errors?.name?.message && <div>{formState.errors?.name?.message}</div>}
            {formState.errors?.password?.message && <div>{formState.errors?.password?.message}</div>}
            {formState.errors?.email?.message && <div>{formState.errors?.email?.message}</div>}

        </form>
    );
}


