import React from 'react';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusName = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={`status ${statusName}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
