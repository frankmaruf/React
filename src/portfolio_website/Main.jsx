import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom"
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import Service from './Service'
import Navbar from './Navbar'
import Footer from './Footer'
function Main() {
    return (
        <React.Fragment>
            <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={ContactUs}/>
                    <Route exact path="/service" component={Service}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </Router>
        </React.Fragment>
    )
}

export default Main;
