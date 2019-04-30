import React from 'react';
import './Comment.css';

class CommentSect extends React.Component { //Push new comment into dummydata
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        // handleSubmit = (event) => {
        //     event.preventDefault();
        // }
    }
    render() {
        return (
            <form >
                <input type="text"
                placeholder="Add comment... "
                name="posts"
                id="new-post"
                />
            </form>
        );
    }
};

export default CommentSect;