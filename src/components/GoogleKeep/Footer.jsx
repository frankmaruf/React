import React from "react"

export const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <React.Fragment>
            <footer>
                <p>copyright © {year}</p>
            </footer>
        </React.Fragment>
    )
}