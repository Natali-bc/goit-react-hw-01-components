import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li>
      <span className="label">{key}</span>
      <span className="quantity">{value}</span>
    </li>
  );
};

StatsItem.propTypes = {
  el: PropTypes.array,
};

export default StatsItem;
