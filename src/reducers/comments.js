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

// combine reducers
const comments = combineReducers({byId, order});

export default comments;