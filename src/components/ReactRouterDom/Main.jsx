import React from 'react'
import {
    BrowserRouter as Router,
    Switch,Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Error from './Error';
import Contact from './Contact';
import About from './About';
import {Users} from './User';

function Main() {
    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" render={()=>{return(<About name="Maruf"/>)}}/>
                    <Route path="/contact" component={Contact}/>
                    <Route exact path="/user/:fname/" component={Users}/>
                    <Route path="/user/:fname/:lname" component={Users}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Main
