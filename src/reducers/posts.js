import * as types from './../constants/PostsActionType';

var initState = [];

export default (state = initState, action ) => {
    switch(action.type){
        case types.LIST_ALL:
            return [...state]
        case types.LIST_POSTS:
            return [...state]
        case types.FETCH_POSTS:
            state = action.posts;
            return [...state]
        default: return [...state]
    }
    return state;
}