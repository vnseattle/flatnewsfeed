import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from './../posts/';
import Businesses from './../businesses/index';
import SearchIcon from './../../assets/icons/search.png';
import callAPI from './../../utils/callAPI';
import {updateListPosts} from './../../actions/posts';
import { connect } from 'react-redux';

import './menu.css';

/**
 * Redering Menu, using react-router-dom for direction
 */

class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchKey : ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var {searchKey} = this.state;
        // search new posts from the API 
        callAPI('SearchNewsFeed.php?keyword='+searchKey).then(res => { 
            console.log(res.data);
            this.props.searchAllPosts(res.data);
        })
    }

    handleInputChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        this.setState({
            searchKey: value
        })
    }

    render(){
        return (
            <div>
                <Router>
                <div>
                    <div className="menu-cover">
                        <div className="topnav">
                            <a href="/">Home</a>
                            <a href="/business">Business</a>
                            <div className="search-container">
                                <form  onSubmit={this.handleSubmit}>
                                    <input type="text" placeholder="Search.." name="search"  onChange={this.handleInputChange}/>
                                    <button type="submit"><img src={SearchIcon} alt='' /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Route path="/" exact component={Posts} />
                    <Route path="/business"  component={Businesses} />

                </div>
                </Router>
            </div>
        )
    }
}


// Map dispatch to props 
const mapDispatchToProps = (dispatch) => {
    return {
        searchAllPosts: (posts) => {
            dispatch(updateListPosts(posts));
        }
    }
}

export default connect(null,mapDispatchToProps)(Menu);