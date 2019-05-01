// import React from 'react';
// import './PostContainer.css';
// import Post from './Post';


// function PostContainer(props) {
//     return (
//         <div className="postContainer">
//             {props.posts.map(post => 
//             <Post key={post.timestamp} post={post} />)}
//         </div>
//     )
// }


// export default PostContainer;
    
import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostsContainer;