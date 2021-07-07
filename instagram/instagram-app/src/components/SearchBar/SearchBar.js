import React from 'react';
import iglogo from '../../images/iglogo.png';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchBarMain">
      <div className="imageLogo">
        <img alt="instagram logo" src={iglogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social">
        <div className="cornerButton">
          <i className="far fa-compass" />
        </div>
        <div className="cornerButton">
          <i className="far fa-heart" />
        </div>
        <div className="cornerButton">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;