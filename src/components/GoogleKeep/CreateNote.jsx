import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const {name,value}=event.target;
        setNote((preValue)=>{
            return{
                ...preValue,
                [name]:value,

        }
        })
        
    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };
    return(
        <React.Fragment>
            <div className="main_note">
                <form>
                    <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"/>
                    <textarea rows="" cols=""  name = "content" value={note.content} onChange={inputEvent} placeholder="Write A Note here...."/>
                    <Button onClick={addEvent}>
                    <AddIcon className="plus_sign"/>
                    </Button>
                </form>
            </div>
        </React.Fragment>
    )
}