import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container-fluid p-3">
      <form className="d-flex mx-auto">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-search"></i>
          </span>
          <input type="search" placeholder="Search" aria-label="Search" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
