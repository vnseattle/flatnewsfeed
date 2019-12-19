/**
 * BUSINESS
 * Author: Henry Ng - Dec 18, 2019
 */
import React, { Component } from 'react';
import './business.css';

class Business extends Component{
  render(){
    var {intro,id,image} = this.props;
    return (
      <div className='businesses__business'>
            <div className='businesses__business__img'>
                <img src={image} alt={intro}/>
            </div>

            <div className='businesses__business__info'>
                <div className='title'>{intro}</div>
            </div>
        </div>
    )
  }
}

export default Business;