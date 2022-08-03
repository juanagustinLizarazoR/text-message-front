import React from "react";
import "./TextFieldStyle.scss"

export interface TextFieldProps {
    placeholder: string
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>> | undefined;
}

export const TextField: React.FC<TextFieldProps> = ({value, setValue, placeholder}) => {
    const changeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined = (event) => {
        const newValue = event.target.value;
        if (setValue) {
            setValue(newValue);
        }
    }
    return <input placeholder={placeholder} value={value} onChange={changeHandler} className={"text-field"}/>

}
