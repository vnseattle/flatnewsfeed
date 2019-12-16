import React, { Component } from 'react'
import { connect } from 'react-redux';
import callAPI from './../../utils/apiCaller';
import { fetchPosts } from './../../actions/index';

class Load extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            isEnd: false,
            isScrolled: false
        };
    }

    componentWillMount(){
        this.scrollListener = window.addEventListener('scroll',(e) => {
            this.handleScroll(e);
            this.setState({ isScrolling: true});
        });
    }

    handleScroll = (e) => {
        var {isScrolled} = this.state;

        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
        const scrolled = winScroll / height;
        if((scrolled*100)>95 && !isScrolled){
            this.setState({isScrolled:true});
            this.LoadMore();
        }
        if((scrolled*100)>70 && (scrolled*100)<90  && isScrolled){
            this.setState({isScrolled:false});
        }
    }

    LoadMore = () => {
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