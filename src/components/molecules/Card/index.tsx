import { Grid } from "@mui/material";
import React from "react";

interface CardProps{
    id:number;
    name:string;
    cusine:string;
    url:string;
    onClick?:(event:any)=>void;
}

const Card : React.FC<CardProps>= ({id,name,cusine,url,onClick})=>{

    return(

        <Grid id={`${id}`} onClick={onClick} container  direction="row"  sx={{margin:"20px",border:"1px groove gray",width:"75%",cursor:"pointer"}}>
            <Grid item xs={5} > <img height="400px" width="400px" src={url} alt={`${id}`} /></Grid>
            <Grid item container direction="column" xs={3} justifyContent="center">
                <Grid item ><h3>{name}</h3></Grid><br/>
                <Grid item ><h3>{cusine}</h3></Grid>
                
            </Grid>
            

        </Grid>

    )
}

export default Card;