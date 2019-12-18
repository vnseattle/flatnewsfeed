/**********************************************
 * Component: POST  
 * Author: Henry Ng - Dec 17, 2019
 * This component is used to display a post 
 ********************************************/
import React, { Component } from 'react'
import callAPI from './../../../utils/callAPI';
import IconTent from "./../../../assets/icons/camping-tent.png";
import IconNetwork from "./../../../assets/icons/network.png";
import IconFirework from "./../../../assets/icons/confetti.png";
import IconSocial from "./../../../assets/icons/social-media.png";
import './post.css';

class Post extends Component{
  constructor(props) {
    super(props);
    this.state = {detail: null};
  }


 
  // get post detail 
  postDetail = (id) => {
      // call API 
      callAPI('GetPost.php?id='+id).then(res => { 
              this.setState({detail: res.data})     
      })
   }


    // render post interface 
    render(){

        // Get info from props 
        var {id, title, image, content, tag} = this.props;
        var {detail} = this.state;
        // Check MSG
        var isNoMsg = false;
        var msg = detail ? detail[0].Phone+'<br/>'+detail[0].Email+'<br/>'+detail[0].Message : '';
        msg === '' ? isNoMsg=true : isNoMsg=false; 
        msg = msg.split('<br/>').map( (item, key) => <span key={key}>{item}<br/></span>);
      

        return(
                <div className="post" onClick={() => this.postDetail(id)} > 
                 
                  <div className="post__head">
                    <div className="post__head__avatar">
                    {tag==='1' && <img src={IconNetwork} alt={title} />}
                    {tag==='2' && <img src={IconFirework} alt={title} />}
                    {tag==='3' && <img src={IconTent} alt={title} />}
                    {tag==='4' && <img src={IconSocial} alt={title} />}
                    </div>

                    <div className="post__head__title">
                        <div>{title}</div>
                    </div>
                  </div>

                  <div className="post__image" value="Open" >
                    <img src={image} alt={title} />
                  </div>

                  <div className="post__content">
                        <p>{content}</p>
                  </div>

                  { isNoMsg ? null : <div className="post__message">
                    {msg}
                  </div>
                  }
                 
                </div>
        )
    }
}

export default Post;