import React from 'react';
import './PostContainer.css';
const PostTop = props => {
    return (
        <div className="postTopMain">
        <div className="post-top">
            <div className="smallPic">
                <img src={props.thumbnailPic} height="40px" />
            </div>
            <div className="username">{props.username}</div>
        </div>
        </div>

    )
}

export default PostTop;