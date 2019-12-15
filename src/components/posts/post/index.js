import React, { Component } from 'react'

class Post extends Component{

    render(){
        var {avatar, title, image, content} = this.props;
        return(
                <div className="post"> 
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
                </div>
        )
    }
}

export default Post;