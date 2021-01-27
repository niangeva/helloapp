import React from 'react';
import SearchBar from './SearchBar';
import CountryList from './SearchResults';

const SearchPage = () => {
    return (
      <div className="search-page">
        
          
          <SearchBar placeholder="Rechercher"
          handleChange={(e) => console.log(e)}

          />
          <div className="results-container">
            <CountryList />
          </div>
          
          
      </div>	
     );
  
	

}

export default SearchPage
