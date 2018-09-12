import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.POSTED: {
            const {id, title, content} = action.payload;
            const comments = [];
            return {
                ...state,
                [id]: {
                    id,
                    title,
                    content,
                    comments,
                    karma: 0,
                }
            };
        }

        case types.COMMENTED: {
            const {idP, idC} = action.payload;
            const post = state[idP];
            const comments = post.comments;
            return {
                ...state,
                [idP]: {
                    ...post,
                    comments: [
                        ...comments,
                        idC
                    ]
                }
            };
        }

        case types.KARMA_SETTED: {
            const { id, dir } = action.payload;
            const post = state[id];
            console.log(post, dir);
            const karma = post.karma;
            return {
                ...state,
                [id]: {
                    ...post,
                    karma: post.karma + parseInt(dir),
                }
            }
        }

        default: {
            return state;
        }
            
    }
}

const order = (state = [], action) => {
    switch (action.type) {
        case types.POSTED: {
            return [
                ...state,
                action.payload.id,
            ];
        }
        
        default: {
            return state;
        }
    }
}

// combine reducers
const posts = combineReducers({byId, order});

// selectores
export const getPost = (state, id) => state.byId[id];
export const getPosts = (state) => state.order.map(
    id => getPost(state, id),
);
export const getCommentIdsFromPost = (state, id) => state.byId[id].comments;


export default posts;