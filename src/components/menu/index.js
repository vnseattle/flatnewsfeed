import React, { Component } from 'react'
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from './../posts/';
import Businesses from './../businesses/index';
import SearchIcon from './../../assets/icons/search.png';
import callAPI from './../../utils/callAPI';
import {updateListPosts} from './../../actions/posts';
import {updateBusinesses} from './../../actions/businesses';
import { connect } from 'react-redux';

import './menu.css';
import businesses from './../businesses/index';

/**
 * Redering Menu, using react-router-dom for direction
 */

class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchKey : "",
            menu:0 // left to right, menu items from 0 ... n 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var {searchKey, menu } = this.state;

        // if searching for posts 
        if(menu===0){
            // search new posts from the API 
            callAPI('SearchNewsFeed.php?keyword='+searchKey).then(res => { 
                //console.log(res.data);
                this.props.searchAllPosts(res.data);
            })
        }

        // if searching for businesses 
        if(menu===1){
            // search new businesses from the API 
            callAPI('SearchAdsNewsFeed.php?keyword='+searchKey+'&limit=100').then(res => { 
                //console.log(res.data);
                this.props.searchAllBusinesses(res.data);
            })
        }

    }

    // changing input value, text field 
    handleInputChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        this.setState({
            searchKey: value
        })
    }

    // switch the menu 
    menuControl(id){
        // remove all active  
        document.querySelector(".active").className = 'topnav__button';

        // add new active 
        if(id===0){document.querySelector('#menu-0').classList.add('active');
        }else if(id===1){document.querySelector('#menu-1').classList.add('active');}
        // menu be like an array, start with index: 0
        this.setState({ menu:id });
    }

    render(){

        var activeMenu = <Posts />;
        if(this.state.menu === 1 ){
            activeMenu = <Businesses />;
        }

        return (
            <div>
                <div>
                    <div className="menu-cover">
                        <div className="topnav">
                            <div id="menu-0" className="topnav__button active" onClick={()=>this.menuControl(0)}>Home</div>
                            <div id="menu-1" className="topnav__button" onClick={()=>this.menuControl(1)}>Business</div>
                            <div className="search-container">
                                <form  onSubmit={this.handleSubmit}>
                                    <input type="text" placeholder="Search.." name="search"  onChange={this.handleInputChange}/>
                                    <button type="submit"><img src={SearchIcon} alt='' /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {activeMenu}
                </div>
             
            </div>
        )
    }
}


// Map dispatch to props 
const mapDispatchToProps = (dispatch) => {
    return {
        searchAllPosts: (posts) => {
            dispatch(updateListPosts(posts));
        },
        searchAllBusinesses: (businesses)=> {
            dispatch(updateBusinesses(businesses))
        }
    }
}

export default connect(null,mapDispatchToProps)(Menu);