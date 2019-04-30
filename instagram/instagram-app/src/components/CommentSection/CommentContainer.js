import React from 'react';
import './Comment.css';
import Comment from './Comment';
import CommentSect from './CommentSect';

function CommentContainer(props) {
  return (
    <div  className="comments">
    <div>
       {props.comments.map(comment => 
            <Comment key={comment.username} comment={comment} />)}
            <CommentSect />
    </div>
    </div>
  )
}

export default CommentContainer;