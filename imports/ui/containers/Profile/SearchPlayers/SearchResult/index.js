import React, { Component } from 'react';

const SearchResult = ({ search }) => {
    <li>{ () => search() }
        <button className="searchResult">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
    </li>
};

export default SearchResult;
