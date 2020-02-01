import React, { useState, useEffect } from 'react'

const Searchbar = ({ searchResults, setSearchResults, guests =[] }) => {

  const [ searchValue, setSearchValue ] = useState('');
  

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect( () => {
    const results = guests.filter(guest =>
      guest.first_name.toLowerCase().includes(searchValue)
    );
    setSearchResults(results);
  }, [searchValue]);

  return (
    <div className="uk-margin uk-width-1-1">
      <form className="uk-search uk-search-default uk-width-1-3@m uk-width-1-1@s">
        <span className="uk-search-icon-flip" uk-search-icon="true"></span>
        <input
          className="uk-search-input uk-border-pill uk-text-center"
          type="search"
          placeholder="Busca invitado..."
          value={searchValue}
          onChange={handleInput}  
        />
      </form>
    </div>
  )
}

export default Searchbar
