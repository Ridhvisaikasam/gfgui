import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { IHotel } from "./HotelReducer";

const useStyle=makeStyles({
    cardmedia:{height:372 ,width: 350}
});

export default function Hotelcard(props:IHotel){

    const style=useStyle();

    return(
        <Card key={props.id}>
           <CardActionArea>
               <CardMedia component="img" image={props.featured_image} className={style.cardmedia}/>
               <CardContent>
                      <Typography variant="h5">{props.name}</Typography>
                      <Typography variant="body2">{props.cuisines}</Typography>
               </CardContent>
           </CardActionArea>     
        </Card>
    );
}