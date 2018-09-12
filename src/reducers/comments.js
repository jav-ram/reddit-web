import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.COMMENTED: {
            const {idC , text} = action.payload;
            return {
                ...state,
                [idC]: {
                    id: idC,
                    text,
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
        case types.COMMENTED: {
            const { idC } = action.payload;
            return [
                ...state,
                idC
            ];
        }
        
        default: {
            return state;
        }
    }
}

// selectores
export const getComment = (state, id) => state.byId[id];
export const getComments = (state) => state.order.map(
    id => getComment(state, id),
);

// combine reducers
const comments = combineReducers({byId, order});

export default comments;