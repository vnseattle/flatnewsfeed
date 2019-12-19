/**
 * Category Item
 * Author: Henry Ng - Dec 18, 2019
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBusinessesRequest } from './../../../actions/businesses';
import './category.css';

class CategoryItem extends Component{

  /**
   * Call Action when user change the category
   * @param {string} CatID: the category ID
   */
  changeCategory = (catID) =>{
    this.props.fetchBusiness({id:'0',cat:catID});
  }

  render(){
    var {label,catID} = this.props;
    return (
      <div className="business__category" onClick={() => this.changeCategory(catID)}>
        {label} 
      </div>
    )
  }
}

// No need to map the state
const mapDispatchToProps = (dispatch) => {
    return {
      fetchBusiness: (config) => {
            dispatch(fetchBusinessesRequest(config.id,config.cat));
        }
    }
}
export default connect(null,mapDispatchToProps)(CategoryItem);
