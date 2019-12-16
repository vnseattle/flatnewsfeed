import React, { Component } from 'react'
import Post from './post/index';
import { connect } from 'react-redux';
import callAPI from './../../utils/callAPI';
import { fetchPosts } from './../../actions/index';
import LoadMore from './load';

class Posts extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            posts: []        
        };
    }

    componentDidMount(){
        var {posts} = this.props;
        if(posts.length==0){
            callAPI('GetPostsNewsFeed.php?crid=0&tagid=0','GET',null).then(res => { 
                this.props.fetchAllPosts(res.data);
            })
        }
    }

    render(){

        var {posts} = this.props;

        var arrPosts = posts.map( (post,i) =>  
        <Post 
            key= {post.Id}
            id = {post.Id}
            avatar={post.Thumb}
            title={post.Author}
            image={post.Thumb}
            content={post.Intro} 
        />);

       

        return (
            <div id="posts">
                {arrPosts}
                <LoadMore/>
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