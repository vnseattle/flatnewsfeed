/**********************************************
 * Component: LOAD
 * Author: Henry Ng - Dec 17, 2019
 * This component is used to load more posts
 * And implement an infinity scroll 
 ********************************************/

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { appendPosts } from '../../../actions/index';
import callAPI from '../../../utils/callAPI';
import getScrolled from '../../../utils/getScrolled';
import './load.css';

class Load extends Component{

    // Local state constructor 
    constructor(props){
        super(props);
        this.state = {
            isEnd: false,
            isScrolled: false,
            tagID:'0'
        };
    }

    // Set scrolling status 
    setScrolled(status){
        this.setState({
            isScrolled: status
        });
    }

    // Start add event listener for scrolling 
    componentWillMount(){
        var {posts} = this.props;
        if(posts.length===0){
            this.scrollListener = window.addEventListener('scroll',(e) => {
                this.handleScroll();
            });
        }
    }
   
    // Handle the scrolling 
    handleScroll = () => {
        var {isScrolled} = this.state;

        // Close to the bottom, start to load more 
        if(getScrolled()>95 && !isScrolled){
            this.setScrolled(true); // disable the scrolling 
            this.loadMore();
        }

        // Re-active the scrolling again 
        if(getScrolled()>70 && getScrolled()<90  && isScrolled){
            this.setScrolled(false);
        }
    }

    // Load more posts 
    loadMore = () => {
        var {posts,tagID} = this.props;    
        
        // Get new posts from the API 
        callAPI('GetPostsNewsFeed.php?crid='+posts[posts.length-1].Id+'&tagid='+tagID).then(res => { 
                // Start to store to the store 
                this.props.fetchAllPosts(res.data);
                if(res.data.length === 0){
                    this.setState({ isEnd: true}) // Nothing to load, END 
                }
        })
    }
    
    // Redering the interface 
    // Notice that the Loading bar usually invisible beacause the infinity scroll
    // will start before we see it 
    render(){
        var {isEnd} = this.state;
        return (
            <div>
            {isEnd ? null: 
            <div id='load' onClick={this.LoadMore}> Load More Ads </div>
            }
            </div>
        )
    }
}

// Map state to props 
const mapStateToProps = state =>{
    return {
        posts: state.posts
    }
}

// Map dispatch to props 
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: (posts) => {
            dispatch(appendPosts(posts));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Load);