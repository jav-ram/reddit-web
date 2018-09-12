import * as types from '../types';

export const setKarma = (
    id,
    dir,
) => ({
    type: types.KARMA_SETTED,
    payload: {
        id,
        dir,
    }
});

export const post = (
    id,
    title,
    content,
) => ({
    type: types.POSTED,
    payload: {
        id,
        title,
        content,
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