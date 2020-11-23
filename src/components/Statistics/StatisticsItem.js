import React from 'react';
import classes from './Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={classes.item}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
