import React from 'react';
import './PostContainer.css';

const PostTop = props => {
    return(
        <div className="post-header">
        <div className="post-thumb-wrapper">
        <img className="post-thumb" src={props.thumbnailUrl}/>
        </div>
        <div>{props.username}</div>
        </div>
    )
}

export default PostTop;