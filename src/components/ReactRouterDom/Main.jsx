import React from 'react'
import {
    BrowserRouter as Router,
    Switch,Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Error from './Error';
import Contact from './Contact';
import About from './About';

function Main() {
    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Main
