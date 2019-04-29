import React from 'react';
import './PostContainer.css';
import Post from './Post';


function PostContainer(props) {
    return (
        <div className="postContainer">
            <p>{props.posts.map(post => 
            <Post key={post.timestamp} post={post} />)}</p>
        </div>
    )
}


export default PostContainer;