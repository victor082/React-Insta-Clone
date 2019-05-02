import React from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import './PostContainer.css';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        }
    }
}

export default PostsPage;