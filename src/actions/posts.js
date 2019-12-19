/*********************************************************
 * Actions are payloads of information that send data 
 * from the application to the store. 
 * They are the only source of information for the store. 
 * You send them to the store using store. dispatch()
 * Author: Henry Ng - Dec 18, 2019
 *********************************************************/
import * as types from '../constants/PostsActionType';
import callAPI  from '../utils/callAPI';

/**
 * Fetch posts after calling API 
 */
export const appendPostsRequest = (pid,tag) => {
    return (dispatch) => {
        return callAPI(`GetPostsNewsFeed.php?crid=${pid}&tagid=${tag}`,'GET',null).then(res => { 
            dispatch(appendPosts(res.data));
        })
    }
}

/**
 * Appends new posts to the store 
 * @param posts 
 */
export const appendPosts = (posts) => {
    return {
        type: types.APPEND_POSTS,
        posts  
    }
}

/**
 * Updates the list of posts in store 
 * @param posts 
 */
export const updateListPosts = (posts) => {
    return {
        type: types.UPDATED_LIST_POSTS,
        posts
    }
}
