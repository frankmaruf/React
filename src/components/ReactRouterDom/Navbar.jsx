import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><NavLink exact activeClassName="active_class" to="/">About us</NavLink></li>
                    <li><NavLink exact activeClassName="active_class" to="/contact">Contact us</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
