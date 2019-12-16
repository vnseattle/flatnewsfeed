import React, { Component } from 'react'
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
import { fetchPosts } from './../../actions/index';

class Load extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            isEnd: false
        };
    }

    LoadMore = () => {
        var {posts} = this.props;
        callAPI('GetPostsNewsFeed.php?crid='+posts[posts.length-1].Id+'&tagid=0').then(res => { 
                this.props.fetchAllPosts(res.data);
                if(res.data.length == 0){
                    this.setState({
                        isEnd: true
                    })
                }
        })
    }
    
    render(){
        var {isEnd} = this.state;
        return (
            <div>
            {isEnd ? null: 
            <div onClick={this.LoadMore}> Load More </div>
            }
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

export default connect(mapStateToProps,mapDispatchToProps)(Load);