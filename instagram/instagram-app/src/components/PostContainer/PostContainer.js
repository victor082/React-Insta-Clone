import React from 'react';
import './PostContainer.css';
import PostsPage from './PostsPage';
import Post from './Post';

function PostContainer(props) {
    return (
        <div className="postContainer">
            {props.posts.map(post => 
            <Post key={post.timestamp} post={post} />)}
        </div>
    )
}

export default PostContainer;