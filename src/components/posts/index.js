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
import callAPI from './../../utils/callAPI';
import { appendPostsRequest } from './../../actions/index';
import LoadMore from './load/';
import Tag from './tag/';
import './posts.css';

class Posts extends Component{

    constructor(props){
        super(props);
        this.state = {
            tagID:'0'
        };
    }
   
    componentDidMount(){
        var {posts} = this.props;
        if(posts.length===0){
            this.props.fetchAllPosts();
        }
    }

    getPostsByTag = (tagID) =>{
        this.setState({tagID});
    }

    render(){

        var {posts} = this.props;
        var {tagID} = this.state;

        var arrPosts = posts.map( (post) =>  
        <Post 
            key= {post.Id}
            id = {post.Id}
            tag = {post.TagID}
            title={post.Author}
            image={post.Thumb}
            content={post.Intro} 
        />);

        return (
            <div>
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
        fetchAllPosts: () => {
            dispatch(appendPostsRequest());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);