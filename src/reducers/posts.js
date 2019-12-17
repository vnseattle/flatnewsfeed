import * as types from './../constants/PostsActionType';

var initState = [];

export default (state = initState, action ) => {
    switch(action.type){
        case types.FETCH_POSTS:
            state = state.concat(action.posts);
            return [...state]
        case "CLEAR_POSTS":
            console.log("clear....");
            return []
        default: return [...state]
    }
    return state;
}