import React, { createContext } from "react";
import {CompA} from "./components/ContextAPI/CompA"
// import {CompB} from "./components/ContextAPI/CompB"
// import {CompC} from "./components/ContextAPI/CompC"
// import "./SASS/Test.scss"

export const FirstName = createContext();
export const LastName = createContext();
const App = () => {
      
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
export default App;