import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectores from '../../reducers';

import './index.css';

import Post from '../post';


const PostList = ({
    posts
}) => (
    <ul>
        {
            posts.map(
                ({ id }) => <Post key={id} id={id} />
            )
        }
    </ul>
);

export default connect(
    state => ({
        posts: selectores.getPosts(state),
    }), 
    undefined,
)(PostList);