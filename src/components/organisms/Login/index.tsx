import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { TextFileds } from "../../atoms/TextField";
import { Buttons } from "../../atoms/Button";
import axios from 'axios';
import {observer} from "mobx-react";
import { UserImpl } from "../../../store";
import { useNavigate } from "react-router-dom"

interface LoginProps{
    user:UserImpl;
}


const Login:React.FC<LoginProps> = observer(({user})=>{

    const navigate = useNavigate();

    

    const api = axios.create({
        baseURL:`http://localhost:3004/users`
    })


    const [userid,setUserid] = useState("");
    const [password,setPassword] = useState("");

    const [users,setUsers] = useState([]);

    const [loading,setLoading]=useState(false);

    const loadAllUsers = async ()=>{
        await api.get('/').then(res=>{
          setUsers(res.data);
        })

        setLoading(true);
      }


      useEffect(()=>{
        loadAllUsers();

      },[loading]);

    

    const validateUser= ()=>{        

       

        
            let foundUser:boolean = false;
        users.forEach((item:any)=>{
            if(item.userid == userid && item.password == password){
                foundUser=true;
                console.log(item.role);
                user.setUser(item);

                if(item.role == "user"){
                    navigate("/cusines");

                }else{
                    navigate(`/alert`);

                }

                console.log(window.location.href);

                return;
            }

        })
        if(foundUser == false){
            alert("Incorrect Username/ Password");
        }

        

        
        
    }


    
   if(loading){
    return(
        <Grid container direction="column" >
            <Grid item  sx={{width:"50%",margin:"10px"}}><TextFileds label={"Username"} onChange={(event)=>{
                setUserid(event.target.value);
            }}/> </Grid>
            <Grid item  sx={{width:"50%",margin:"10px"}}><TextFileds label={"password"} type={"password"} onChange={(event)=>{
                setPassword(event.target.value);
    
            }}/> </Grid>
            <Grid item sx={{width:"50%",margin:"10px"}}><Buttons text={"Submit"} onClick={()=>{
                console.log(users);
    
                validateUser()}}/></Grid>
        </Grid>);

   }else{
       return <></>
   }

    
})

export default Login;