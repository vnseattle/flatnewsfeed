/*********************************************************
 * Actions are payloads of information that send data 
 * from the application to the store. 
 * They are the only source of information for the store. 
 * You send them to the store using store. dispatch()
 *********************************************************/
import * as types from './../constants/PostsActionType';

/**
 * The request to get posts from API
 * @param posts 
 */
export const fetchPosts = (posts) => {
    return {
        type: types.FETCH_POSTS,
        posts,  
    }
}

/**
 * The request to get posts from API by Tag
 * @param posts 
 */
export const fetchPostsByTag = (posts,tagID) => {
    return {
        type: types.FETCH_POSTS_BY_TAG,
        posts,
        tagID
    }
}

