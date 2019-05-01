// import React from 'react';
// import SearchBar from './components/SearchBar/SearchBar';
// // import logo from './logo.svg';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: []
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       posts: dummyData
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <SearchBar />
//         </header>
//         <PostContainer posts={this.state.posts} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
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
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;