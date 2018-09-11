import * as types from '../types';

export const setKarma = (
    up,
    karma,
) => ({
    type: types.KARMA_SETTED,
    payload: {
        up,
        karma
    }
});

export const post = (
    id,
    title,
    content,
) => ({
    type: types.POSTED,
    payload: {
        title,
        content
    }
});

export const comment = (
    idP, 
    text,
    idC,
) => ({
    type: types.COMMENTED,
    payload: {
        idP,
        text,
        idC,
    }
});