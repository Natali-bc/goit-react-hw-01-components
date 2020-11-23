import React from 'react';
import classes from './TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistory/TransactionHistoryItem.js';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={classes.transactionHistory}>
      <thead className={classes.transactionHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          return <TransactionHistoryItem key={el.id} item={el} />;
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
