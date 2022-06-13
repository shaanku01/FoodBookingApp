import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import React from "react";
import { UserImpl } from "../../store";
import Card from "../../components/molecules/Card";
import RestaurantCard from "../../components/molecules/RestaurantCard";
import { Buttons } from "../../components/atoms/Button";
import { Navigate, useNavigate } from "react-router-dom";

interface OrderDetailsProps{
    user:UserImpl;
}

const OrderDetailsPage: React.FC<OrderDetailsProps> = observer(({user})=>{

    const navigate = useNavigate();

    const [food,setFoods] = useState([]);
    const [restaurants,setRestaurants]  = useState([]);

    const api = axios.create({
        baseURL:"http://localhost:3004"
    });

    const getFoods = async()=>{
        await api.get("/foods").then(res=>setFoods(res.data));
       //setFoods(foods.filter((item:any)=>{user.user.foods.includes(item.id)}));
        

       }

    const getRestaurants = async()=>{
        await api.get("/restaurants").then(res=>setRestaurants(res.data));
        //setRestaurants(restaurants.filter((item:any)=>{user.user.restaurant.includes(item.id)}));
        
    }



    useEffect(()=>{
            getFoods();
            getRestaurants();
          },[])

    


          const tes = ()=>{
              console.log(food);
              console.log(restaurants);
          }


          tes();
    return(
        <Grid container >
            <Grid item xs={12}><h4>User : {user.user.userid} </h4></Grid>

            <Grid item xs={12}><h2>Selected Food Items</h2></Grid>
            <Grid item xs={12}>
                {
                   food.map((item:any,index)=>{
                       if(user.user.foods.includes(index+1))
                       return <Card {...item}/>

                   })
                    
                   
                        
                }
            </Grid>

            <Grid item xs={12}><h2>Selected Restaurants</h2></Grid>
            <Grid item xs={12}>
                {
                   restaurants.map((item:any,index)=>{
                       if(user.user.restaurant.includes(index+1))
                       return <RestaurantCard {...item}/>

                   })
                    
                   
                        
                }
            </Grid>

            <Grid item xs={12} sx={{padding:"25px",textAlign:"right"}}>

                <Buttons text={"Proceed to Place"} onClick={()=>{
                    api.post("/orders",user.user);

                    user.clearUserData();

                    navigate("/");


                }}/>
            </Grid>

        </Grid>

    )
    

});

export default OrderDetailsPage;