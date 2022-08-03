import React,{PropsWithChildren} from "react";
import  './MainLayoutStyles.scss'
export interface MainLayoutProps{
    title:string
}
export const MainLayout:React.FC<PropsWithChildren<MainLayoutProps>> = ({children,title})=>{
    return <div className={"container"}>
        <p className={"title"}>{title}</p>
        {children}
    </div>

}
