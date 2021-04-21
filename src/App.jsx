import React, { useState } from "react";
import { CreateNote } from "./components/GoogleKeep/CreateNote";
import { Footer } from "./components/GoogleKeep/Footer";
import { Header } from "./components/GoogleKeep/Header";
import { Note } from "./components/GoogleKeep/Note";
import "./SASS/CloneKeep.scss"
// import "./SASS/Test.scss"

const App = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((preValue)=>{
        return [...preValue,note]
    })
    console.log(note);
        
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
                    content = {val.content}/>
                })
            }
            <Footer/>
        </React.Fragment>
    )
}
export default App;