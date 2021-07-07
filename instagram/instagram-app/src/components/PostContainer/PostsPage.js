import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
          posts: [],
          filteredPosts: []
        };
    }
    componentDidMount() {
        this.setState({ posts: dummyData });
      }
      
      searchPostsHandler = e => {
        const posts = this.state.posts.filter(post => {
          if (post.username.includes(e.target.value)) {
            return post;
          }
        });
        this.setState({ filteredPosts: posts });
      };

    render() {
        return(
            <PostContainer
            posts={
              this.state.filteredPosts.length > 0 ? this.state.filteredPosts: this.state.posts
              } />
        )
    }

}

export default PostsPage;