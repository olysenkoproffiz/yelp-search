import React from 'react';
// import { countries } from '../config/Countries'

const SearchBar = (props) => {

  return (
    <React.Fragment>
      <form className="search-bar" onSubmit={props.onSubmit}>
        {/* <select id="lang" onChange={props.onChange} value={props.selectValue} name="country">
          {countries.map((country) => {
            return (
              <option key={country.code} value={country.code}>{country.name}</option>
            )
          })}
        </select> */}
        <input type="text" className="search-bar-input" onChange={props.onChange} name="city" placeholder={props.value} />
        <button type="submit" className="btn btn-primary search-bar-button">Search!</button>
      </form>
    </React.Fragment>
  );
}

export default SearchBar;