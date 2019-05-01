// import React from 'react';
// import PropTypes from 'prop-types';
// import './Comment.css';

// const Comment = props => {
//     return(
//         <div className="commentLines">
//             <p className="commentUser">{props.comment.username}</p>
//             <p className="commentText">{props.comment.text}</p>
//         </div>
//     )
// }

// Comment.propTypes = {
//     comment: PropTypes.shape({
//       text: PropTypes.string,
//       username: PropTypes.string
//     })
//   };

// export default Comment;
import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;