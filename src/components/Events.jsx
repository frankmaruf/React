import React,{useState} from "react"

const Events = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name,setName] = useState('Click Me')
    const bgChange = () => {
        let newBg = '#34495e'
        setBg(newBg);
        setName('Ouch!! 🙃')
    };

    const backToNormal = () => {
        setBg(purple);
        setName("Ayyo!! 😠");
    };
    return(
        <React.Fragment>
            <div style={{backgroundColor:bg}}>
                <button onClick={bgChange} onDoubleClick={backToNormal}>{name}</button>
            </div>
        </React.Fragment>
    )
}
export default Events;