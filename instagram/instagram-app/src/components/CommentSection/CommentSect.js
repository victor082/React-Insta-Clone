// import React from 'react';
// import './Comment.css';

// class CommentSect extends React.Component { //Push new comment into dummydata
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: []
//         };

//     }
//     render() {
//         return (
//             <form >
//                 <input type="text"
//                 placeholder="Add comment... "
//                 name="posts"
//                 id="new-post"
//                 />
//             </form>
//         );
//     }
// };

// export default CommentSect;

import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;