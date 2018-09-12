import { combineReducers } from 'redux';

import posts, * as fromPost from './posts';
import comments, * as fromCommment from './comments';

const reducer = combineReducers({ posts, comments });

export default reducer;


export const getPost = (state, id) => fromPost.getPost(state.posts, id);
export const getPosts = (state) => fromPost.getPosts(state.posts);
export const getCommentIdsFromPost = (state, id) => fromPost.getCommentIdsFromPost(state.posts, id);

export const getComment = (state, id) => fromCommment.getComment(state.comments, id);
export const getComments = (state) => fromCommment.getComments(state.comments);

// combine
export const getCommentsOfPost = (state, id) => {
    // get all comments
    const comments = getComments(state);
    // filter
    return comments.filter( comment => getCommentIdsFromPost(state, id).includes(comment.id) );
}