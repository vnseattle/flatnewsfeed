/*********************************************************
 * The reducers that relate to the posts which are displayed
 * on the news feed
 *********************************************************/
import * as types from './../constants/PostsActionType';

/** The initial state which are an empty array */
var initState = [];

/**
 * state is the input state, which empty is default
 * action is the action which is requested to 
 * change the store 
 */
export default (state = initState, action ) => {
    switch(action.type){
        case types.FETCH_POSTS:
            state = state.concat(action.posts);
            return [...state]
        default: return [...state]
    }
    return state;
}