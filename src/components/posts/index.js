import React, { Component } from 'react'
import Post from './post/index';
import { connect } from 'react-redux';
import axios from 'axios';
import callAPI from './../../utils/apiCaller';
import { fetchPosts } from './../../actions/index';

class Posts extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        callAPI('GetPostsNewsFeed.php?crid=0&tagid=0','GET',null).then(res => { 
            this.props.fetchAllPosts(res.data)
        })
    }
    
    render(){

        var {posts} = this.props;
        //var {posts} = this.state;

        var arrPosts = posts.map( (post,i) =>  
        <Post 
            key= {i}
            avatar={post.Thumb}
            title={post.Author}
            image={post.Thumb}
            content={post.Intro} 
        />);

        return (
            <div id="posts">
                {arrPosts}
            </div>
        )

    }
}

const mapStateToProps = state =>{
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosts: (posts) => {
            dispatch(fetchPosts(posts));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);