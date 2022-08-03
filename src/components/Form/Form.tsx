import React, { useState} from "react";
import {Button} from "../Button/Button";
import {TextField, TextFieldProps} from "../TextField";
import "./FormStyle.scss"

export interface FormProps extends Pick<TextFieldProps,'placeholder'> {
submitHandler:(value:string)=>void
    submitText:string;

}

export const Form:React.FC<FormProps> = ({placeholder,submitHandler,submitText}) =>{
    const [value,setValue] = useState("")
    return <div className={"form-container"}>

     <TextField placeholder={placeholder} value={value} setValue={setValue} />
        <Button clickHandler={()=> {
            submitHandler(value)
            setValue("")
        }} text={submitText}/>
    </div>
}
