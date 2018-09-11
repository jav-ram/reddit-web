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
                action.id,
            ];
        }
        
        default: {
            return state;
        }
    }
}

// combine reducers
const posts = combineReducers({byId, order});

export default posts;