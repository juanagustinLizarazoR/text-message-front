import React from 'react'
import "./ListItemButtonStyle.scss"

export interface ListItemButtonProps {
    value: string;
    clickHandler: () => void;
    disabled?: boolean
}

export const ListItemButton: React.FC<ListItemButtonProps> = ({clickHandler, value, disabled = true}) => {

    return <button className={"list-item-button-style"} onClick={clickHandler} disabled={disabled}>
        {value}
    </button>

}
