import React from "react";
import Login from "../../components/organisms/Login";
import {currentUser} from "../../store";

const LoginPage = ()=>{

    return(
        <div>
            <h1 style={{marginBottom:"50px"}}>Login Page...</h1><br/><br/>
            <Login user={currentUser}/>
        </div>
    )
}

export default LoginPage;