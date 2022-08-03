import React, {useEffect, useState} from 'react'
import {TextItem} from "../../../services/dto";
import {ListItemButton} from "./ListItemButton";
import "./ListItemStyle.scss"

export interface ListItemProps {
    id: string;
    value: string;
    editText: string;
    editHandler: (id: string, textItem: TextItem) => Promise<void>
    deleteText: string;
    deleteHandler: (id: string) => Promise<void>;
    disabled: boolean;
    setActive: (id: string) => void
}

export const ListItem: React.FC<ListItemProps> = ({
                                                      id,
                                                      editHandler,
                                                      deleteHandler,
                                                      value,
                                                      editText,
                                                      deleteText,
                                                      disabled = false,
                                                      setActive
                                                  }) => {
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        if (disabled) {
            if (value !== currentValue) {

                setCurrentValue(value);
            }
        }

    }, [disabled, setCurrentValue, value])

    return <li className={"li-container"} onClick={() => {
        setActive(id)
    }}

    >
        <input className={"list-item-text-field"} value={currentValue} onChange={(e) => {
            const {value} = e.target
            if (value && value !== currentValue) {
                setCurrentValue(value);
            }
        }
        }/>
        <div className={"button-container"}>
            <ListItemButton value={editText} disabled={disabled || value === currentValue}
                            clickHandler={async () => await editHandler(id, {value: currentValue, id})}/>
            <ListItemButton value={deleteText} clickHandler={async () => {
                await deleteHandler(id);
            }} disabled={false}/>
        </div>

    </li>
}
