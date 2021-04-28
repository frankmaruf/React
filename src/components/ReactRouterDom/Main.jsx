import React from 'react'
import "./index.scss"
import {
    BrowserRouter as Router,
    Switch,Route,Redirect
} from 'react-router-dom';
import Navbar from './Navbar';
import Error from './Error';
import Contact from './Contact';
import About from './About';
import {Users} from './User';
import Search from './Search';
import Home from './Home';

function Main() {
    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" render={()=>{return(<About name="Maruf"/>)}}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/search" component={Search}/>
                    <Route exact path="/user/:fname" component={Users}/>
                    <Route path="/user/:fname/:lname" component={Users}/>
                    {/* #to have error page just uncomment it
                    <Route component={Error}/> */}
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Main;
