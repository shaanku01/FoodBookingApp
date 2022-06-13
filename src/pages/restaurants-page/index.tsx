import { Grid } from "@mui/material"
import React, { useEffect } from "react"
import axios from "axios"
import {useState} from "react";
import RestaurantCard from "../../components/molecules/RestaurantCard";
import { UserImpl } from "../../store";

import { observer } from "mobx-react-lite";
import { Buttons } from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";


interface RestaurantPageProps{
    user:UserImpl;
}



const RestaurantsPage:React.FC<RestaurantPageProps> = observer(({user})=>{
    const navigate = useNavigate();

    useEffect(()=>{
        getAllRestaurants();
        if(user.user.userid==""){
            navigate("/");
        }
    },[])

    const [restaurants,setRestaurant] = useState([]);
    

    

    const api = axios.create({
        baseURL:`http://localhost:3004/restaurants`
    });

    const getAllRestaurants = async ()=>{
        await api.get("/").then(res=>{
            setRestaurant(res.data);
        })
    }

    

    return(
        

        <Grid container>
            <Grid item xs={8} sx={{marginLeft:"20px"}} ><h2  style={{marginBottom:"50px"}}>Restaurants Near You..</h2></Grid>
            <Grid item xs={2}><p>Logged In User : {user.user.userid}</p></Grid>
            


            {
                restaurants.map((item:any,index)=>{
                    return <RestaurantCard id={item.id} name={item.name} rating={item.rating} location={item.location} url={item.url} onClick={(event:any)=>{
                        console.log(item.id);
                        
                         let ele = document.getElementById(`${item.id}`);
                         
                         if(ele!.style.border==""){
                            ele!.style.border="10px solid red"
                            user.addRestaurant(item.id);
                         }else{
                            ele!.style.border="";
                            user.removeRestaurant(item.id);
                         }



                        
                    }} />
                })
            }

            <Grid item xs={12} sx={{textAlign:"right",padding:"50px"}}> 
            <Buttons text={"Back"} onClick={()=>{
                user.clearFoods();
                navigate("/cusines");
            }}/>
            <Buttons text={"Proceed"} onClick={()=>{
                console.log(user.user.restaurant);
                navigate("/orderDetails");
            }} />
            
            </Grid>            
            

        
        </Grid>
    )

});

export default RestaurantsPage;