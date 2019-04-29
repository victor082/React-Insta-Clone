import React from 'react';
import SearchBarInput from './SearchBarInput';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchBarContainer">
        <span className="searchBarHeader">
        <span className="searchBarLogo">
            <i className="fab fa-instagram" /><span>|</span><h2>Instagram</h2>
            </span>
            <SearchBarInput/>
        </span>
        </div>
    )
}


export default SearchBar;