import React from 'react';
import Profile from './components/Profile.js';
import userData from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statsData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList.js';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <Statistics stats={statsData} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
