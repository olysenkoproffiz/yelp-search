import React from 'react';
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types';

// import { countries } from '../config/Countries'

const SearchBar = (props) => {

  return (
    <React.Fragment>
      <Form className="search-bar" onSubmit={props.onSubmit}>
        {/* <select id="lang" onChange={props.onChange} value={props.selectValue} name="country">
          {countries.map((country) => {
            return (
              <option key={country.code} value={country.code}>{country.name}</option>
            )
          })}
        </select> */}
        <Form.Group controlId="formBasicSearch">
          <Form.Label style={{ color: "white" }}>Search for the Businesses: </Form.Label>
          <Form.Control type="text" placeholder={props.value} name="city" className="search-bar-input" onChange={props.onChange} />
        </Form.Group>
        <button type="submit" className="btn btn-warning search-bar-button">Search!</button>
      </Form>
    </React.Fragment>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default SearchBar;