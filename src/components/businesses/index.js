/**
 * BUSINESSES  
 * Author: Henry Ng - Dec 18, 2019
 */
import React, { Component } from 'react';
import Business from './business/index';
import Category from './category/index';
import { connect } from 'react-redux';
import {fetchBusinessesRequest} from './../../actions/businesses';

import './businesses.css';


class Businesses extends Component{

  constructor(props){
    super(props);
    this.state = {
      busData: []
    }

    var config = { id:'0', tag:'33'}; // default for market
    this.props.fetchInitBusinesses(config);

  }

  
  render(){
    var {businesses} = this.props;
    
    var businessesCards = businesses.map(business => <Business key={business.Id} id={business.Id} intro={business.Intro} image={business.Thumb}  />)

    return (
      <div id='businesses'>
          <div id="businesses__category">
              <Category />    
          </div>
          <div id='businesses__business'>
              {businessesCards}
          </div>
          <div id='businesses__detail'>
             
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
