/**********************************************
 * Component: POSTS 
 * Author: Henry Ng - Dec 17, 2019
 * This component is used to build the layout
 * of list of posts, includes 
 * tag filters and load more
 ********************************************/
import React, { Component } from 'react'
import Post from './post/index';
import { connect } from 'react-redux';
import { appendPostsRequest } from './../../actions/posts';
import LoadMore from './load/';
import Tag from './tag/';
import './posts.css';

class Posts extends Component{

    constructor(props){
        super(props);
        this.state = {
            tagID:'0', // default tag
            isScrolled: false // user is scrolling 
        };

        // first start with inital posts
        var {posts} = this.props;        
        if(posts.length===0){
            var config = { id:'0', tag:'0'};
            this.props.fetchInitPosts(config);
        }
    }


    // binding tagID
    getPostsByTag = (tagID) =>{
        this.setState({tagID});
    }

    render(){

        var {posts} = this.props;
        var {tagID} = this.state;

        var arrPosts = posts.map( (post,i) =>  
        <Post 
            key= {i}
            id = {post.Id}
            tag = {post.TagID}
            title={post.Author}
            image={post.Thumb}
            content={post.Intro} 
        />);

        return (
            <div id="posts-cover">
                <div id="posts">
                <Tag getPostsByTag={this.getPostsByTag} />
                {arrPosts}
                <LoadMore tagID={tagID}/>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state =>{
    return {
        posts: state.posts    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitPosts: (config) => {
            dispatch(appendPostsRequest(config.id,config.tag));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);