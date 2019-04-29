import React from 'react';
import './Comment.css';

const CommentSect = props => {
    return (
        <div>
            <p>{props.comments.text}</p>
            <p>{props.comments.username}</p>
        </div>
    )
}

export default CommentSect;