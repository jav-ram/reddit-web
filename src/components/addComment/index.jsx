import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectores from '../../reducers';

import * as actions from '../../actions';

import { v4 } from 'uuid';

const addComment = ({
    onSubmit,
}) => (
    <form onSubmit={(event)=>{
        onSubmit(this.text.value);
        this.text.value = ""
        event.preventDefault();
    }}>
        <input className="text" ref={node => this.text = node} placeholder="Comente"  />
        <input type="submit" value="Comentar" />
    </form>
);

export default connect(
    undefined,
    (dispatch, {idP}) => ({
        onSubmit: (text) => {
            console.log(text);
            const id = v4();
            dispatch(actions.comment(idP, text, id));
        }
    }),
)(addComment);
