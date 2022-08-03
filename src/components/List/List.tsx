import React from "react";
import {ListItem, ListItemProps} from "./ListItem";
import "./ListStyle.scss"

export interface ListProps {

    listItems: Array<ListItemProps>
    currentActiveItem: string;
    setCurrentActiveItem: (id: string) => void
}


export const List: React.FC<ListProps> = ({listItems, setCurrentActiveItem, currentActiveItem}) => {

    return <ol className={"list-container"}>
        {listItems.map(item => <ListItem key={item.id} {...item} disabled={currentActiveItem !== item.id}
                                         setActive={setCurrentActiveItem}/>)}
    </ol>

}
