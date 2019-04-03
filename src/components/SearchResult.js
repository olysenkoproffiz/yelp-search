import React from 'react';
import ItemSummary from './ItemSummary'

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

export default SearchResult;