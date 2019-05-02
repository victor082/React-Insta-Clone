import React from 'react';
import './PostContainer.css';

const PostTop = props => {
    return(
        <div className="post-header">
        <div className="thumbNailPost">
        <img className="thumbnail" src={props.thumbnailUrl}/>
        </div>
        <div>{props.username}</div>
        </div>
    )
}

export default PostTop;