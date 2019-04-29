import React from 'react';
import PostTop from './PostTop';
import './PostContainer.css';

function Post(props) {
    return (
        <div className="postMain">
            <PostTop username={props.post.username} 
            thumbnailPic={props.post.thumbnailUrl}/>
            <img src={props.post.imageUrl} />
        </div>
    )
}

export default Post;