import { Grid } from "@mui/material";
import React from "react";
import StarIcon from '@mui/icons-material/Star';

interface RestaurnatCardProps{
    id:number;
    name:string;
    rating:string;
    url:string;
    location:string;
    onClick?:(event:any)=>void;
}

const RestaurantCard : React.FC<RestaurnatCardProps>= ({id,name,rating,url,location,onClick})=>{

    return(

        <Grid id={`${id}`} onClick={onClick} container  direction="row"  sx={{margin:"20px",border:"1px groove gray",width:"75%",cursor:"pointer"}}>
            <Grid item xs={5} > <img height="400px" width="400px" src={url} alt={`${id}`} /></Grid>
            <Grid item container direction="column" xs={3} justifyContent="center">
                <Grid item ><h3>{name}</h3></Grid><br/>
                <Grid item><h3>{location}</h3> </Grid>
                <Grid item ><h3><StarIcon/> {rating}</h3></Grid>
                
            </Grid>
            

        </Grid>

    )
}

export default RestaurantCard;