import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentContainer';
import LikeSection from './LikeSection';
import PostTop from './PostTop';

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
      <div className="postBorder">
      
        <PostTop
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl} />
        <div>
          <img
            src={this.props.post.imageUrl}
            alt="posts"
            className="postPic"
             />
        </div>

        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
          newComment={this.state.comments} />

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