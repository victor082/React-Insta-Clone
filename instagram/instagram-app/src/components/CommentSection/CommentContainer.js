import React from 'react';
import './Comment.css';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.posts
        }
    }

    render() {
        return (
            <div>
        {this.state.comments.map((e, i) => <p>{e.username}</p>)}
        <Comment />
            </div>
        )
    }
}


  export default CommentContainer;