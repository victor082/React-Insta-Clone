import React from 'react';
import PostTop from './PostTop';
import CommentContainer from '../CommentSection/CommentContainer';
import './PostContainer.css';

function Post(props) {
    return (
        <div className="postMain">
            <PostTop username={props.post.username} 
            thumbnailPic={props.post.thumbnailUrl}/>
            <div> <img src={props.post.imageUrl} />
            </div>
            <p className="Likes">{props.post.likes} Likes</p>
            <CommentContainer comments={props.post.comments}/>
        </div>
    )
}

export default Post;