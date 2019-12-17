import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from './../../actions/index';
import callAPI from '../../utils/callAPI';
import getScrolled from './../../utils/getScrolled';

class Load extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            isEnd: false,
            isScrolled: false
        };
    }

    setScrolled(status){
        this.setState({
            isScrolled: status
        });
    }

    componentWillMount(){
        var {posts} = this.props;
        if(posts.length==0){
            this.scrollListener = window.addEventListener('scroll',(e) => {
                this.handleScroll();
            });
        }
    }
   

    handleScroll = () => {
        var {isScrolled} = this.state;
        if(getScrolled()>95 && !isScrolled){
            this.setScrolled(true);
            this.loadMore();
        }
        if(getScrolled()>70 && getScrolled()<90  && isScrolled){
            this.setScrolled(false);
        }
    }

    loadMore = () => {
        var {posts} = this.props;
        callAPI('GetPostsNewsFeed.php?crid='+posts[posts.length-1].Id+'&tagid=0').then(res => { 
                this.props.fetchAllPosts(res.data);
                if(res.data.length == 0){
                    this.setState({ isEnd: true})
                }
        })
    }
    
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