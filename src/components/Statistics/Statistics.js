import React from 'react';
import classes from './Statistics.module.css';
import StatisticsItem from './StatisticsItem.js';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes.statList}>
        {stats.map(el => {
          return (
            <StatisticsItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
