import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Menu extends Component{

    changeCategory = (categoryID) => {
       this.props.onListPost(categoryID);
    }

    render(){
        return(
            <div id="menu">
            <div className='menu__item' id="menu__list-all" onClick={() => this.changeCategory('1')} ><span>Home</span></div>
            <div className='menu__item' id="menu__list-event" onClick={() => this.changeCategory('2')} ><span>About</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
    }
};

const mapDispatchToProps = (dispatch,props) => {
    return {
        onListPost: (categoryID) => {
            dispatch(actions.listPost(categoryID));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);