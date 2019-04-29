import React from 'react';

class SearchBarInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }

    }
    render() {
        return (
            <form>
                <input
                placeholder="search"
                type="text"
                name="search"
                id="new-search"
                value={this.state.input}
                />
            </form>
        )
    }
}

export default SearchBarInput;