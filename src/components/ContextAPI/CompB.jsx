import React, { useContext } from "react"
import { FirstName, LastName } from "../../App"

import {CompC} from "./CompC"


export const CompB =() =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (<h1>My Name is {fname} {lname}</h1>)
}