import React from 'react'
import {Form, List} from '../../components';
import {useForm} from "../../hooks";
import {MainLayout} from "../../layouts";


export const MainPage: React.FC = () => {
    const {onSubmit, currentActiveItem, setCurrentActiveItem, textValues} = useForm();
    return <MainLayout title={"Guarda el texto"}>
        <Form placeholder={"Ingrese el texto"} submitHandler={onSubmit} submitText={"Enviar"}/>
        {<List listItems={textValues.listItems} currentActiveItem={currentActiveItem}
               setCurrentActiveItem={setCurrentActiveItem}/>}
    </MainLayout>

}
