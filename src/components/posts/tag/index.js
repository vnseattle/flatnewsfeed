/**********************************************
 * Component: TAG 
 * Author: Henry Ng - Dec 17, 2019
 * This component is used to filter the posts 
 ********************************************/
import React, { Component } from 'react'
import IconNewsPaper from "./../../../assets/icons/newspaper.png";
import IconTent from "./../../../assets//icons/camping-tent.png";
import IconNetwork from "./../../../assets//icons/network.png";
import IconFirework from "./../../../assets//icons/confetti.png";
import IconSocial from "./../../../assets//icons/social-media.png";
import callAPI from './../../../utils/callAPI';
import { connect } from 'react-redux';
import { fetchPostsByTag} from './../../../actions/index';
import './tag.css';

class Tag extends Component{

    constructor(props){
        super(props);
        this.state = {
            active: 0
        }
    }

    /**
     * Import the tagID 
     * @param {string} tagID 
     */
    getPostsByTag(tagID){

        // set active tag 
        this.setState({ active: tagID });

        // sending tagID, to make sure the 
        // next 10 posts are in the same tag 
        this.props.getPostsByTag(tagID);

        // Call API to fecth data by Tag
        callAPI(`GetPostsNewsFeed.php?crid=0&tagid=`+tagID,'GET',null).then(res => { 
            this.props.fetchAllPostsByTag(res.data);
        })
    }

    render(){
        var {active} = this.state;

        return(
                <div id="posts__tag">
                    <div className={`posts__tags--circle`} id={active ==='0' ? 'posts__tags--active':''} onClick={()=> this.getPostsByTag('0')}><img src={IconNewsPaper} alt='all'/></div>
                    <div className={`posts__tags--circle`} id={active ==='1' ? 'posts__tags--active':''} onClick={()=> this.getPostsByTag('1')}><img src={IconNetwork} alt='org'/></div>
                    <div className={`posts__tags--circle`} id={active ==='2' ? 'posts__tags--active':''} onClick={()=> this.getPostsByTag('2')}><img src={IconFirework} alt='event'/></div>
                    <div className={`posts__tags--circle`} id={active ==='3' ? 'posts__tags--active':''} onClick={()=> this.getPostsByTag('3')}><img src={IconTent} alt='place'/></div>
                    <div className={`posts__tags--circle`} id={active ==='4' ? 'posts__tags--active':''} onClick={()=> this.getPostsByTag('4')}><img src={IconSocial} alt='hot deal'/></div>
                </div>
        )
    }
}

// sent action only, doesn't need to map state
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPostsByTag:(posts) =>{
            dispatch(fetchPostsByTag(posts));
        }
    }
}

export default connect(null,mapDispatchToProps)(Tag);