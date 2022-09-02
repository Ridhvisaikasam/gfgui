import { AppBar, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Fab, Grid, InputBase, makeStyles, TextField, Theme, Toolbar, Typography } from "@material-ui/core";

const withoutProps=makeStyles<Theme>(
    (theme:Theme)=>({
        searchBox:{backgroundColor:'white'}
    })
);

interface IStyle{
    bgclr:string
}

const withProps=makeStyles<Theme,IStyle>(
    (theme:Theme)=>({
        searchBox:{backgroundColor:props=>props.bgclr}
    })
);

export default function MaterialUI(){
    
    const style = withoutProps();

    const style2=withProps(
        {bgclr:'wheat'}
    );
    
    return(

        <>
            <TextField/>
            <Button variant="contained">contained</Button>
            <Fab color="primary" variant="extended"> SomeText </Fab>
            <Typography variant="h5">something</Typography>
            <CircularProgress/>

            <Grid container spacing={5}>
                <Grid item xs={6}>one</Grid>
                <Grid item>two</Grid>
                <Grid item>three</Grid>
            </Grid>

            <Card>
                <CardActionArea>
                    <CardMedia component="img" image="https://reqres.in/img/faces/2-image.jpg"></CardMedia>
                    <CardContent><Typography variant="h5">CARD CONTENT</Typography></CardContent>
                </CardActionArea>
            </Card>

            <AppBar>
                 <Toolbar>
                      <InputBase className={style.searchBox}/> 
                      <InputBase className={style2.searchBox}/>    
                      <Button>SUBMIT</Button>
                </Toolbar>    
            </AppBar>  
        </>

    );
}