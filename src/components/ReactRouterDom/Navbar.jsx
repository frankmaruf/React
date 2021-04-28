import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.scss"
function Navbar() {
    return (
        <React.Fragment>
            <div className="mainMenu">
                <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
                <NavLink exact activeClassName="active_class" to="/about">About us</NavLink>
                <NavLink exact activeClassName="active_class" to="/contact" >Contact us</NavLink>
                <NavLink exact activeClassName="active_class" to="/user/maruf">User</NavLink>
                <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
            </div>
        </React.Fragment>
    )
}

export default Navbar;
