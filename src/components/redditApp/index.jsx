import React, { Fragment } from 'react';
import './redditApp.css';

import AddPost from '../addPost';
import PostList from '../postList';

const RedditApp = () => {
    return (
        <div className="app">
            <AddPost />
            <PostList />
        </div>
    );
}

export default RedditApp;