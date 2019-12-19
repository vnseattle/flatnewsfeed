/**
 * BUSINESSES  LAYOUT
 * Includes: Business, Category, Quickview
 * Author: Henry Ng - Dec 18, 2019
 */
import React, { Component } from 'react';
import Business from './business/index';
import Category from './category/index';
import { connect } from 'react-redux';
import {fetchBusinessesRequest} from './../../actions/businesses';
import callAPI from './../../utils/callAPI';

import './businesses.css';


class Businesses extends Component{

  // Default State 
  constructor(props){
    super(props);
    this.state = {
      busData: [],
      detail:[{
        Intro:'',
        Address:'',
        Phone:'',
        Email:'',
        Message:''
      }],
      gallery:[]
    }

    // Start to get default business 
    var config = { id:'0', tag:'33'}; // markets
    this.props.fetchInitBusinesses(config);

  }

  /**
   * Get detail of the business
   * Return a json data 
   */
  getDetail = (id) =>{

    // get detail data 
    callAPI(`GetBus.php?id=${id}`).then(res => { 
        this.setState({ detail: res.data });
    });

    // get images gallery 
    callAPI(`GetImages.php?tb=2&id=${id}`).then(res => { 
      this.setState({ gallery: res.data });
    });

  }

  // change the thumb by image gallery 
  changeThumb = (ImageLink) => {
    document.getElementById("businesses__detail__thumb").src = ImageLink;
  }

  // back to the normal thumb 
  backThumb = () => {
    document.getElementById("businesses__detail__thumb").src = this.state.detail[0].Thumb;
  }

  
  render(){
    // Business
    var {businesses} = this.props;
    var {detail,gallery} = this.state;
    

    // solve the <br/> tag problems in user message 
    var msg = detail[0].Message;
    msg = msg.split('<br/>').map( (item, key) => <span key={key}>{item}<br/></span>);
    var businessesCards = businesses.map((business,i) => <Business key={business.Id} id={business.Id} intro={business.Intro} image={business.Thumb} getDetail={this.getDetail} />)

    // Gallery render 
    var images = gallery.map((image,i) => <div key={image.Id} 
    onMouseEnter={()=> this.changeThumb(image.ImageLink)} 
    onMouseLeave={()=> this.backThumb()} 
    className='gallery__imgs'><img key={image.Id} src={image.ImageLink} /></div>);

    return (
      <div id='businesses'>
          <div id="businesses__category">
              <Category />    
          </div>
          <div id='businesses__business'>
              {businessesCards}
          </div>
          <div id='businesses__detail'>
            <div id='businesses__detail__info'>
            { gallery.length < 1 ? '' : <div id='businesses__detail__gallery'>
                {images}
             </div>}
             <div><img id='businesses__detail__thumb' src={detail[0].Thumb} alt={detail[0].Intro}/></div>

             <div>{detail[0].Intro}</div>
             <div>{detail[0].Address}</div>
             <div>{msg}</div>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
    return {
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitBusinesses: (config) => {
            dispatch(fetchBusinessesRequest(config.id,config.tag));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Businesses);
