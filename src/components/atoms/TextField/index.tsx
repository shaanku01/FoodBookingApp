import React from "react";
import TextField from '@mui/material/TextField';
import {observer} from "mobx-react";

interface TextFieldProps{
    label?: String;
    onChange?:(event:any)=>void;
    value?:string;
    type?:string;
}

export const TextFileds:React.FC<TextFieldProps> = (props)=>{
    return(
        <TextField type={props.type} id="outlined-basic" label={props.label} variant="outlined" onChange={props.onChange} sx={{width:"100%"}}/>
    )

}