/**
 * BUSINESSES  
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
      }]
    }

    var config = { id:'0', tag:'33'}; // default for market
    this.props.fetchInitBusinesses(config);

    

  }

  /**
   * Get detail of the business
   * Return a json data 
   */
  getDetail = (id) =>{
    callAPI(`GetBus.php?id=${id}`,'GET',null).then(res => { 
        console.log(res.data);
        this.setState({ detail: res.data });
    });
  }

  
  render(){
    var {businesses} = this.props;
    var {detail} = this.state;
    var msg = detail[0].Message;
    msg = msg.split('<br/>').map( (item, key) => <span key={key}>{item}<br/></span>);
    var businessesCards = businesses.map(business => <Business key={business.Id} id={business.Id} intro={business.Intro} image={business.Thumb} getDetail={this.getDetail} />)

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
             <div><img src={detail[0].Thumb} alt={detail[0].Intro}/></div>
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
