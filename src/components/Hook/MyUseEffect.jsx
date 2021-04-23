import React,{useState,useEffect} from "react";

export const MyUseEffect = () => {
    const [num, setNum] = useState(0);
    const [numS, setNumS] = useState(0);
    useEffect(()=>{
        alert("I am Clicked")
    },[numS]);
    return(
        <React.Fragment>
            <button onClick={()=>{setNum(num+1)}}> Click Me {num} </button>
            <br/>
            <button onClick={()=>{setNumS(numS+1)}}> Click Me {numS} </button>
        </React.Fragment>
    )
}


export const TestUseState =() => {
    const [num1,setNum1] = useState()
    useEffect(() => {
        document.title=`You Clicked ${num1} times`
    }, [num1]);

    return(
        <React.Fragment>
            <button onClick={()=>{setNum1(num1+1)}}> Click Me {num1}</button>
        </React.Fragment>
    )
}
