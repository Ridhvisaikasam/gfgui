interface IProps
{
    name:string,
    label:string,
    onClick:()=>void
}

export default function Gbutton(props : IProps){
     
    
    return(
      <div>
          <button name={props.name} onClick={props.onClick}>{props.label}</button>
      </div>
   );
}