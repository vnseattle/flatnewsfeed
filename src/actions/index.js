import * as types from './../constants/PostsActionType';

export const fetchPosts = (posts) => {
    return {
        type: types.FETCH_POSTS,
        posts,  // payload 
    }
}

export const clearPosts = () => {
    return {
        type: 'CLEAR_POST'
    }
}