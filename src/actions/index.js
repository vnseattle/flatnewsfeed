import * as types from './../constants/PostsActionType';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const listPost = (categoryID) => {
    return {
        type: types.LIST_POSTS,
        categoryID, 
    }
}

export const fetchPosts = (posts) => {
    return {
        type: types.FETCH_POSTS,
        posts, 
    }
}