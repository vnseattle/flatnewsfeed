import React, { Component } from 'react'
import IconNewsPaper from "./icons/newspaper.png";
import IconTent from "./icons/camping-tent.png";
import IconNetwork from "./icons/network.png";
import IconFirework from "./icons/confetti.png";
import IconSocial from "./icons/social-media.png";
import callAPI from './../../../utils/callAPI';
import { connect } from 'react-redux';
import { fetchPostsByTag} from './../../../actions/index';
import './tag.css';

class Tag extends Component{

    getPostsByTag(tagID){
        this.props.getPostsByTag(tagID);
        callAPI(`GetPostsNewsFeed.php?crid=0&tagid=`+tagID,'GET',null).then(res => { 
            this.props.fetchAllPostsByTag(res.data);
        })
    }

    render(){
        return(
                <div id="posts__tag">
                    <div className="posts__tags--circle" onClick={()=> this.getPostsByTag('0')}><img src={IconNewsPaper} /></div>
                    <div className="posts__tags--circle" onClick={()=> this.getPostsByTag('1')}><img src={IconNetwork} /></div>
                    <div className="posts__tags--circle" onClick={()=> this.getPostsByTag('2')}><img src={IconFirework} /></div>
                    <div className="posts__tags--circle" onClick={()=> this.getPostsByTag('3')}><img src={IconTent} /></div>
                    <div className="posts__tags--circle" onClick={()=> this.getPostsByTag('4')}><img src={IconSocial} /></div>
                </div>
        )
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPostsByTag:(posts) =>{
            dispatch(fetchPostsByTag(posts));
        }
    }
}

export default connect(null,mapDispatchToProps)(Tag);