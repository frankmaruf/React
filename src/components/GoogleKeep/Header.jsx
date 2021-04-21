import React from "react"
import Keep from "../Image/Keep.png"
export const Header= () => {
    return(
        <React.Fragment>
            <div className="header">
            <img src={Keep} alt="logo" width="70" height="50"/>
            <h1>Google Keep</h1>
            </div>
        </React.Fragment>
    )
}