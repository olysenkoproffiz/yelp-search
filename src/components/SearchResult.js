import React from 'react';
import ItemSummary from './ItemSummary';
import PropTypes from 'prop-types';

const SearchResult = ({ searchResult }) => {
  return (
    <div className="search-result">
      <div className="row">
        {searchResult && searchResult.map(searchItem => {
          return (
            <ItemSummary item={searchItem} key={searchItem.id} />
          )
        })}

      </div>
    </div>
  );
}

SearchResult.propTypes = {
  SearchResult: PropTypes.array
};

export default SearchResult;