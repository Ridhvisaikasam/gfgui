import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyle=makeStyles({
    spinnercontainer:{height:'100%', width:'100%',display:'flex',justifyContent:'center',alignItems:'center',zIndex:55},
    backdropcontainer:{zIndex:100}
})

interface Iprops{
showBackDrop:boolean
}

export default function LoadingSpinner(props: Iprops){

    const style=useStyle();

    if(props.showBackDrop){
    return(
        <Backdrop open={props.showBackDrop} className={style.backdropcontainer}>
              <div className={style.spinnercontainer}><CircularProgress/></div>
        </Backdrop>
    );}

    else{
    return(<div className={style.spinnercontainer}><CircularProgress/></div>);
    }
}