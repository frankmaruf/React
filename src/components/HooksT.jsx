import React,{useState} from 'react';


const HooksT = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(newTime);
    
    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };
    return(
        <React.Fragment>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime} >Update Time</button>
        </React.Fragment>
    )
}

const Digital = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(newTime);
    
    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };
    setInterval(UpdateTime,1000)
    return(
        <React.Fragment>
        <h1>{ctime}</h1>
        </React.Fragment>
    )
}

export default HooksT
export {Digital};