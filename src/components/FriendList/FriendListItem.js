import React from 'react';
import classes from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={classes.item}>
      <span
        className={isOnline ? classes.available : classes.notAvailable}
      ></span>
      <img
        className={classes.avatar}
        src={avatar}
        alt="user avatar"
        width="48"
      />
      <p className={classes.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
