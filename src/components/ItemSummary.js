import React from 'react';
import PropTypes from 'prop-types';

const ItemSummary = ({ item }) => {
  return (
    <React.Fragment>
      <div className="item-card overflow-hidden" onClick={() => { window.location.assign(item.url) }}>
        <div className="item-image"><img src={item.image_url} className="img-responsive" alt="business" style={imageStyle} /></div>
        <div className="item-title d-flex justify-content-left flex-column">
          <h3>{item.name}</h3>
          <h5>Phone: {item.display_phone}</h5>
          <h5>Rating: {item.rating}</h5>
          <h5>Review count: {item.review_count}</h5>
          <h5>URL: <a href={item.url} style={linkStyle}>Click to redirect</a></h5>
        </div>
      </div>
    </React.Fragment>
  );
}

const imageStyle = { width: "400px", height: "400px" };
const linkStyle = { color: "rgb(110, 226, 255)" };

ItemSummary.propTypes = {
  item: PropTypes.object
};

export default ItemSummary;