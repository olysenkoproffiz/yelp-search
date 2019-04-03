import React, { Component } from 'react';
import { searchBusiness, setPropertyValue } from "../store/actions/searchActions";

import SearchBar from "../components/SearchBar"
import SearchResult from "../components/SearchResult"

import { connect } from 'react-redux';

class SearchContainer extends Component {
  state = {
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchBusiness(this.props.search.searchParams);
  }

  updateStoreProperty = (propertyName, newValue) => {
    const changedValue = {
      property: propertyName,
      value: newValue
    };
    this.props.setPropertyValue(changedValue);
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    const searchParams = {
      ...this.props.search.searchParams,
      [name]: value
    }
    this.updateStoreProperty('searchParams', searchParams);
  }

  render() {
    const { search } = this.props;
    return (
      <React.Fragment>
        <SearchBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.props.search.searchParams.city}
          selectValue={this.props.search.searchParams.country}
        />
        <SearchResult searchResult={search.searchItems} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchBusiness: (searchParams) => dispatch(searchBusiness(searchParams)),
    setPropertyValue: (payload) => { dispatch(setPropertyValue(payload)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);