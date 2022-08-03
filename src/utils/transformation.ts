import {ListItemProps, ListProps} from "../components";
import {TextItem} from "../services/dto";

export const transformListItem:(input:Array<TextItem>,editHandler:ListItemProps["editHandler"],deleteHandler:ListItemProps["deleteHandler"],editText:string,deleteText:string,currentActiveItem:string,setCurrentActiveItem:(id:string)=>void)=>ListProps =(input,editHandler,deleteHandler,editText,deleteText,currentActiveItem,setCurrentActiveItem)=>{
const transformedValues:ListProps["listItems"] = input.map(item=>({
    deleteHandler,editHandler,deleteText,editText,value:item.value,id:item.id,disabled:item.id !== currentActiveItem,setActive:setCurrentActiveItem
}))
    return {
    listItems:transformedValues,
        currentActiveItem,
        setCurrentActiveItem
    }
}
