import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Posts from './../posts/';
import About from './../about/';
import './menu.css';

/**
 * Redering Menu, using react-router-dom for direction
 */

class Menu extends Component{

    render(){
       
        return (
            <div>
                <Router>
                <div>
                    <div className="menu-cover">
                        <div className="topnav">
                            <a className="active" href="/">Home</a>
                            <a href="/about">About</a>
                        </div>
                    </div>
                    <Route path="/" exact component={Posts} />
                    <Route path="/about"  component={About} />
                </div>
                </Router>
            </div>
        )
    }
}



export default Menu;