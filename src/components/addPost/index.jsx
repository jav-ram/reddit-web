import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './index.css';

import { v4 } from 'uuid';

const AddPost = ({
    onSubmit,
}) => (
    <form onSubmit={(event)=>{
        onSubmit(this.title.value, this.content.value);
        this.title.value = "";
        this.content.value = "";
        event.preventDefault();
    }}>
        <input className="title" ref={node => this.title = node} placeholder="Titulo"  />
        <input className="content" ref={node => this.content = node} placeholder="Contenido"  />
        <input className="submit" type="submit" value="Publicar" />
    </form>
)

export default connect(
    undefined,
    dispatch => ({
        onSubmit: (title, content) => {
            const id = v4();
            dispatch(actions.post(id, title, content));
        },
    }),
  )(AddPost);