import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectores from '../../reducers';

import * as actions from '../../actions';

import Comment from '../comment';
import AddComment from '../addComment';

const Post = ({
    id,
    title,
    content,
    karma,
    commentList,
    onClick,
 }) => (
    <li className="post">
        <h3 className="title"> { title } </h3>
        <p className="content"> { content } </p>
        <div>
            <button onClick={() => onClick(1)}>UP</button>
            <button onClick={() => onClick(-1)}>DOWN</button>
            <p> { karma } </p>
        </div>
        <ul>
            {
                commentList.map(
                    comment => <Comment key={comment.id} id={comment.id} />
                )
            }
        </ul>

        <AddComment idP={id}/>

    </li>
);

export default connect(
    (state, { id }) => ({
        ...state.posts.byId[id],
        commentList: selectores.getCommentsOfPost(state, id),
    }),
    (dispatch, { id }) => ({
        onClick: (dir) => {
            console.log(dir);
            dispatch(actions.setKarma(id, dir));
        }
    }), 
)(Post);