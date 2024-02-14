import React from 'react';
import Profile from './Profile/Profile.jsx';
import user from '../assets/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from '../assets/data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../assets/friends.json';
import TransactionHistory from './Transaction/TransactionHistory.jsx';
import transactions from '../assets/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList
        friends={friends}
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
      />

      <TransactionHistory items={transactions} />
    </div>
  );
};
