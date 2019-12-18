/**********************************************
 * Component: LOAD
 * Author: Henry Ng - Dec 17, 2019
 * This component is used to load more posts
 * And implement an infinity scroll 
 ********************************************/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { appendPostsRequest, updateListPosts } from '../../../actions/index';
import getScrolled from '../../../utils/getScrolled';
import './load.css';

class Load extends Component{
    _isMounted = false;

    // Local state constructor 
    constructor(props){
        super(props);
        this.state = {
            lastPostID:0,
            postsLength:0,
            isEnd: false,
            isScrolled: false,
            tagID:'0'
        };
        window.addEventListener('scroll',(e) => {
            this.handleScroll();
        });
    }

    // Set scrolling status 
    setScrolled(status){
        if (this._isMounted) {
            this.setState({
                isScrolled: status
            });
        }
    }

    componentDidMount() {
        this._isMounted = true;
        
    }
    
    componentWillUnmount() {
        this._isMounted = false;
        this.props.clearPosts();
    }

   
    // Handle the scrolling 
    handleScroll = () => {
        var {isScrolled} = this.state;

        // Hit the bottom, start to load more 
        if(getScrolled()>=95 && !isScrolled){
            this.setScrolled(true); // disable the scrolling 
            this.loadMore();
        }

        // Re-active the scrolling again 
        if(getScrolled()>75  && isScrolled){
            this.setScrolled(false);
        }
    }

    // Load more posts 
    loadMore = () => {
        var {posts,tagID} = this.props;
        var {postsLength} = this.state;

        if(posts.length !== postsLength){
            this.props.loadMorePosts({id: posts[posts.length-1].Id, tag: tagID});
            if (this._isMounted) {
                this.setState({postsLength: posts.length});
            }
        }
    }
    
    // Redering the interface 
  
    render(){
        return (
            <div>
                <div id='load' onClick={this.loadMore}> Load More Ads </div>
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
        loadMorePosts: (config) => {
            dispatch(appendPostsRequest(config.id,config.tag));
        },
        clearPosts:()=>{
            dispatch(updateListPosts([]));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Load);