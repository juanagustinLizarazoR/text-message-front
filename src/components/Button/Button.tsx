import React from "react";
import "./ButtonStyle.scss"
export interface  ButtonProps{
    text:string;
    clickHandler:()=>void
}

export const Button: React.FC<ButtonProps> = ({clickHandler,text}) =>{
    return <button onClick={clickHandler} className={"button"}>
        {text}
    </button>
}
