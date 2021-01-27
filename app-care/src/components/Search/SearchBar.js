import React from 'react';
import {Link} from 'react-router-dom';
import  './Search.css';
import BackLink from '../Back/BackLink';
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  
    return (
        <>
        <div className="search-container">
            <div className="navbar-toggle"><BackLink/></div> 
            <input 
                className="search"
                name="search"
                placeholder={props.placeholder}
                onChange={props.handleChange}
            />
            <button className="submitSearch" type="submit"><FaSearch/></button>
            </div>
        </>
    );
  };


  

  
 export default SearchBar;