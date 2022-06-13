import { Grid } from "@mui/material"
import React, { useEffect } from "react"
import axios from "axios"
import {useState} from "react";
import Card from "../../components/molecules/Card";
import { UserImpl } from "../../store";

import { observer } from "mobx-react-lite";
import { Buttons } from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";


interface CusinePageProps{
    user:UserImpl;
}



const CusinePage:React.FC<CusinePageProps> = observer(({user})=>{
    const navigate = useNavigate();

    useEffect(()=>{
        getAllFoods();
        if(user.user.userid==""){
            navigate("/");
        }
    },[])

    const [food,setFood] = useState([]);
    

    

    const api = axios.create({
        baseURL:`http://localhost:3004/foods`
    });

    const getAllFoods = async ()=>{
        await api.get("/").then(res=>{
            setFood(res.data);
        })
    }

    

    return(
        

        <Grid container>
            <Grid item xs={8} sx={{marginLeft:"20px"}} ><h2  style={{marginBottom:"50px"}}>List of Food Items...</h2></Grid>
            <Grid item xs={2}><p>Welcome {user.user.userid}</p></Grid>
            


            {
                food.map((item:any,index)=>{
                    return <Card id={item.id} name={item.name} cusine={item.cusine} url={item.url} onClick={(event:any)=>{
                        console.log(item.id);
                        
                         let ele = document.getElementById(`${item.id}`);
                         
                         if(ele!.style.border==""){
                            ele!.style.border="10px solid red"
                            user.addItem(item.id);
                         }else{
                            ele!.style.border="";
                            user.removeItem(item.id);
                         }



                        
                    }} />
                })
            }

            <Grid item xs={12} sx={{textAlign:"right",padding:"50px"}}> 
            <Buttons text={"Proceed"} onClick={()=>{
                console.log(user.user.foods);
                navigate("/restaurants");
            }} />
            
            </Grid>            
            

        
        </Grid>
    )

});

export default CusinePage;