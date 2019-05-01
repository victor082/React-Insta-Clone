// import React from 'react';
// import PostTop from './PostTop';
// import CommentContainer from '../CommentSection/CommentContainer';
// import './PostContainer.css';

// function Post(props) {
//     return (
//         <div className="postMain">
//             <PostTop username={props.post.username} 
//             thumbnailPic={props.post.thumbnailUrl}/>
//             <div> <img src={props.post.imageUrl} />
//             </div>
//             <p className="Likes">{props.post.likes} Likes</p>
//             <CommentContainer comments={props.post.comments}/>
//         </div>
//     )
// }

// export default Post;

import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostTop';

import './PostContainer.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div className="post-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;