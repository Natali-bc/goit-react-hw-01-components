import React from 'react';
import classes from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ item }) => {
  return (
    <tr className={classes.transactionTr}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
