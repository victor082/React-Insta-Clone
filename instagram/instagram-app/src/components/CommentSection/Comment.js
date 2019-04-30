import React from 'react';
import './Comment.css';

const Comment = props => {
    return(
        <div className="commentLines">
            <p className="commentUser">{props.comment.username}</p>
            <p className="commentText">{props.comment.text}</p>
        </div>
    )
}

export default Comment;