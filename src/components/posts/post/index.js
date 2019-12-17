import React, { Component } from 'react'
import callAPI from './../../../utils/callAPI';
import IconTent from "./../tag/icons/camping-tent.png";
import IconNetwork from "./../tag/icons/network.png";
import IconFirework from "./../tag/icons/confetti.png";
import IconSocial from "./../tag/icons/social-media.png";
import './post.css';

class Post extends Component{

    state = {
      detail: null
    }

    popup = (id) => {
      var {detail} = this.state;
      callAPI('GetPost.php?id='+id).then(res => { 
                  this.setState({
                    detail: res.data
                  })     
      })
    }

    render(){
        var {id, title, image, content, tag} = this.props;
        var {detail} = this.state;
        // Check MSG
        var isNoMsg = false;
        var msg = detail ? '☎ '+detail[0].Phone+'<br/>✉ '+detail[0].Email+'<br/>'+detail[0].Message : '';
        msg === '' ? isNoMsg=true : isNoMsg=false; 
        msg = msg.split('<br/>').map( (item, key) => <span key={key}>{item}<br/></span>);
      

        return(
                <div className="post" onClick={() => this.popup(id)}> 
                  <div className="post__head">
                    <div className="post__head__avatar">
                    {tag==1 && <img src={IconNetwork} />}
                    {tag==2 && <img src={IconFirework} />}
                    {tag==3 && <img src={IconTent} />}
                    {tag==4 && <img src={IconSocial} />}
                    </div>

                    <div className="post__head__title">
                        <div>{title}</div>
                    </div>
                  </div>

                  <div className="post__image">
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