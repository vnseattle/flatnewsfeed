/*********************************************************
 * REDUCER - POSTS 
 * Author: Henry Ng - Dec 18, 2019
 * The reducer that relate to the posts which are displayed
 * on the news feed
 *********************************************************/
import * as types from '../constants/PostsActionType';

/** The initial state which are an empty array */
var initState = [];

/**
 * state is the input state
 * action is the action which is requested to change the store 
 */
export default (state = initState, action ) => {
    switch(action.type){
        case types.APPEND_POSTS: // append the posts in store 
            state = state.concat(action.posts);
            return [...state]
        case types.UPDATED_LIST_POSTS: // re-new the list 
            state = []; // clear the store 
            state = action.posts; // add new posts 
            return [...state];
        default: return [...state]
    }
}