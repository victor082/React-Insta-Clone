import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
// import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
