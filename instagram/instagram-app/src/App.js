import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthentication';
import Login from './components/Login/Login';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler} />
          <Login />
          <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
