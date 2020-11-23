import React from 'react';
import classes from './FriendList.module.css';
import FriendListItem from '../FriendList/FriendListItem.js';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={classes.friendList}>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
