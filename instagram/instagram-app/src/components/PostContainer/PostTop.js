// import React from 'react';
// import './PostContainer.css';
// const PostTop = props => {
//     return (
//         <div className="postTopMain">
//         <div className="post-top">
//             <div className="smallPic">
//                 <img src={props.thumbnailPic} height="40px" />
//             </div>
//             <div className="username">{props.username}</div>
//         </div>
//         </div>

//     )
// }

// export default PostTop;

import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;