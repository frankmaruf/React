import React,{useState} from 'react'
import { CreateNote } from "./CreateNote";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Note } from "./Note";
import "./CloneKeep.scss"


export const MainComp = () => {
    
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((preValue)=>{
        return [...preValue,note]
    })
    console.log(note);
    };
    const onDelete = (id) => {
        setAddItem((oldData)=>oldData.filter((currentdata,index)=>{
            return index !== id;
        }))
    }  
    return(
        <React.Fragment>
            <Header/>
            <CreateNote
                passNote={addNote}
            />
            {
                addItem.map((val,index)=>{
                    return <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content = {val.content}
                    deleteItem={onDelete}
                    />
                })
            }
            {/* <Footer/> */}
        </React.Fragment>
    )
}