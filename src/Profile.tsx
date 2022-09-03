import { Fab, makeStyles,  Typography } from "@material-ui/core";
import firebase from "firebase";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./UserContext";

const useStyles=makeStyles({
    parentcontainer:{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'},
    childcontainer:{display:'flex',justifyContent:'left',flexDirection:'column',gap:'10px'},
    buttoncontainer:{display:'flex',justifyContent:'flex-end',gap:'10px'}
});

export default function Profile(){

    const style=useStyles();
    const history=useNavigate();
    const context=useContext(Context);
    const onSignOut=()=>{
        firebase.auth().signOut();
        history("/");
    }

    return(
        <div className={style.parentcontainer}>
          <div className={style.childcontainer}>
             <Typography variant="h3">Profile Page</Typography>
             <Typography variant="h5">{context?.displayName}</Typography>
             <Typography variant="h5">{context?.email}</Typography>
             <Typography variant="h5">{context?.uid}</Typography>
             <div className={style.buttoncontainer}>
                <Fab color="secondary" variant="extended" onClick={onSignOut}>Sign Out</Fab>
                <Fab color="primary" variant="extended" onClick={()=>history("/Home")}>Home</Fab>
            </div>
          </div>
        </div>
    );
}
