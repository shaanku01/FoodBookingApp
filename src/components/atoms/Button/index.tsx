import React from "react";
import Button from '@mui/material/Button';

interface ButtonProps{
    text:String;
    onClick?:()=>void;

}

export const Buttons : React.FC<ButtonProps> = (props)=>{

    return(<Button onClick={props.onClick} variant="contained" size="large">{props.text}</Button>);


}