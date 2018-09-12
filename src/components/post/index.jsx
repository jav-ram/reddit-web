import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './post.css';

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
        <div className="footer">
            <button className="upvote" onClick={() => onClick(1)}><p>&#9650;</p></button>
            <button className="downvote" onClick={() => onClick(-1)}><p>&#9660;</p></button>
            <p className="karma"> karma: { karma } </p>
        </div>
        <div className="CommentList">
            <h4> Comentarios: </h4>
            <ul>
                {
                    commentList.map(
                        comment => <Comment key={comment.id} id={comment.id} />
                    )
                }
            </ul>
        </div>

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