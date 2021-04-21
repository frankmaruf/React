import React, { useState } from "react"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const ListCom = (props) => {
    const [line,setLine] = useState(false);
    const cutIt = () =>{
        if (line===false) {
            setLine(true);
        }else{
            setLine(false)
        }
    }
    return <>
    <div className="todo_style">
    <span onClick={cutIt}><DeleteOutlineIcon className="deleteIcon"/></span>
    <li style={{textDecoration: line ? 'line-through':'none'}}>{props.text}</li>
    </div>
    </>
}

export default ListCom;