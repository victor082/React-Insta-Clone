import React, { Fragment } from 'react';
import PostTop from './PostTop';
import './PostContainer.css';

function Post(props) {
    return (
        <Fragment>
        <div className="postMain">
            <PostTop username={props.post.username} 
            thumbnailPic={props.post.thumbnailUrl}/>
            <img src={props.post.imageUrl} />
        </div>
        </Fragment>
    )
}

export default Post;