import React, { Component } from 'react';
import Posts from '../posts/';
import Download from '../download/';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Menu extends Component{

    render(){
        return(
            <div>
            <Router>
                <div id="menu">
                <NavLink to="/"  exact className='menu__item' id="menu__list-all" ><span>Home</span></NavLink>
                <NavLink to="/download" exact className='menu__item' id="menu__list-event" ><span>Download</span></NavLink>
                </div>
                <Route path='/' exact component={Posts} />
                <Route path='/download' exact component={Download} />
            </Router>
            </div>
        )
    }
}

export default Menu;