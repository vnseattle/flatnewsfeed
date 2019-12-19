/*********************************************************
 * REDUCER - BUSINESSES
 * Author: Henry Ng - Dec 18, 2019
 * The reducer that relate to the businesses which are displayed
 * on the business page 
 *********************************************************/
import * as types from '../constants/BusinessesActionType';

/** The initial state which are an empty array */
var initState = [];

/**
 * state is the input state
 * action is the action which is requested to change the store 
 */
export default (state = initState, action ) => {
    switch(action.type){
        case types.LIST_BUSINESSES:  
            //console.log('action sent',action.businesses,action.catID);
            state = action.businesses;
            //state = action.catID;
            //console.log('state now',state);
            return state;
        default: return [...state]
    }
}