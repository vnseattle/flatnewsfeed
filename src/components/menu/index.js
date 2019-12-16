import React, { Component } from 'react';

class Menu extends Component{

    changeCategory = (categoryID) => {
      
    }

    render(){
        return(
            <div id="menu">
            <div className='menu__item' id="menu__list-all" onClick={() => this.changeCategory('1')} ><span>Home</span></div>
            <div className='menu__item' id="menu__list-event" onClick={() => this.changeCategory('2')} ><span>Download</span></div>
            </div>
        )
    }
}

export default Menu;