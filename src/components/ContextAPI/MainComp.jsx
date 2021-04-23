import React,{createContext} from 'react'
import { CompA } from './CompA';
import { FirstName, LastName } from "../../App"
// in App.jsx you have to define
// const FirstName = createContext();
// const LastName = createContext();
export const MainComp = () =>{
    return(
        <React.Fragment>
            <FirstName.Provider value={"Abdullah Al"}>
                <LastName.Provider value={"Maruf(Akash)"}>
                <CompA/>
                </LastName.Provider>
            </FirstName.Provider>
        </React.Fragment>
    )
}