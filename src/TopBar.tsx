import { AppBar, Button, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./UserContext";

const useStyles=makeStyles({
    buttons:{color:'white'},
    toolbar:{height:'100%',display:'flex' ,justifyContent:'space-between'},
    searchContainer:{ height:'50%',flexGrow:1 ,backgroundColor:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center'},
    searchicon:{margin:'0 15px'},
    searchbox:{color:'white',width:'100%'}
});

interface searchProps{
    searchString: string;
    setSearchString: (searchString:string)=>void;
}

export default function TopBar(props:searchProps){
    
    const history=useNavigate();
    const style=useStyles();
    const context=useContext(Context);
    const isUserExist=context && context.uid;
    
    return(
        <>
          <AppBar>
             <Toolbar className={style.toolbar}>
                <div className={style.searchContainer}>
                <SearchIcon className={style.searchicon}/>
                <InputBase placeholder={"search..."} className={style.searchbox} value={props.searchString} onChange={(e)=>props.setSearchString(e.target.value)}/>
                </div>
                {!isUserExist&&<Button className={style.buttons} onClick={()=>history("/SignUp")}>SignUP</Button>}
                {!isUserExist&&<Button className={style.buttons} onClick={()=>history("/LogIn")}>LogIN</Button>}
                {isUserExist&&<Button className={style.buttons} onClick={()=>history("/Profile")}>Profile</Button>}
            </Toolbar>
          </AppBar>
        
        </>
    );
}