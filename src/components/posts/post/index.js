import React, { Component } from 'react'
import callAPI from './../../../utils/callAPI';
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
        var {id, avatar, title, image, content} = this.props;
        var {detail} = this.state;
         
        var isNoMsg = false;
        var msg = detail ? '☎ '+detail[0].Phone+'<br/>✉ '+detail[0].Email+'<br/>'+detail[0].Message : '';
        msg == '' ? isNoMsg=true : isNoMsg=false; 
        msg = msg.split('<br/>').map(function(item, key) {
          return (
            <span key={key}>
              {item}
              <br/>
            </span>
          )
        });


        return(
                <div className="post" onClick={() => this.popup(id)}> 
                  <div className="post__head">
                    <div className="post__head__avatar">
                        <img src={avatar} />
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