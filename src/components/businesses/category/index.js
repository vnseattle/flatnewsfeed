/**
 * Category  
 * Author: Henry Ng - Dec 18, 2019
 */
import React, { Component } from 'react';
import CategoryItem from './categoryItem';
import callAPI from './../../../utils/callAPI';
import './category.css';

class Category extends Component{

  constructor(props){
    super(props);
    this.state = {
      category:[]
    }
    callAPI(`GetCat.php`,'GET',null).then(res => { 
        this.setState({ category: res.data });
    });

    
  }

  render(){
    var {category} = this.state;
    let catItems = category.map(item => <CategoryItem key={item.CatID} catID={item.CatID} label={item.CatName} />);

    return (
      <div>
         {catItems}
      </div>
    )
  }
}

export default Category
