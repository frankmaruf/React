import React from 'react'
import {NavLink} from 'react-router-dom'
const Error = () => {
    return (
        <React.Fragment>
            <div className="setStyle3">
                <h1>Error</h1>
                <p>404</p>
                <NavLink to="/">Go Back</NavLink>
            </div>

        </React.Fragment>
    )
}

export default Error;
