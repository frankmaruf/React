import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.scss"
function Navbar() {
    return (
        <React.Fragment>
            <div className="menu_style">
                <NavLink exact activeClassName="active_class" to="/">About us</NavLink>
                <NavLink exact activeClassName="active_class" to="/contact" >Contact us</NavLink>
                <NavLink exact activeClassName="active_class" to="/user/maruf">User</NavLink>
            </div>
        </React.Fragment>
    )
}

export default Navbar;
