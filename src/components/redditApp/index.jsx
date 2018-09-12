import React, { Fragment } from 'react';
import './index.css';

import AddPost from '../addPost';
import PostList from '../postList';

const RedditApp = () => {
    return (
        <div>
            <AddPost />
            <PostList />
        </div>
    );
}

export default RedditApp;