import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListMat";

const ToDoList = () => {
    const [item,setItem] = useState("");
    const [newItem,setNewItem] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value)
    }
    const listOfItem =() =>{
        setNewItem((preValue)=>{
            return [...preValue,item]
        })
        setItem("")
    }

    return(
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDoList</h1>
                    <br/>
                    <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItem}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {newItem.map((val,index)=>{
                            return(
                                <ListCom 
                                key = {index}
                                text={val}/>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ToDoList;