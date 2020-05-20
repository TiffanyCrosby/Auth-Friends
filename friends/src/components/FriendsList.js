import React from 'react';

import { Friend } from './Friend';
import { AddNewFriend } from './AddNewFriend';

let friends = [
  {
    id: 1,
    name: 'Rachel Green',
    age: 30,
    email: 'rachel@friends.com',
  },
  {
    id: 2,
    name: 'Joey Tribbiani',
    age: 34,
    email: 'joey@friends.com',
  },
  {
    id: 3,
    name: 'Chandler Bing',
    age: 32,
    email: 'chandler@friends.com',
  },
  {
    id: 4,
    name: 'Ross Geller',
    age: 32,
    email: 'ross@friends.com',
  },
  {
    id: 5,
    name: 'Monica Bing',
    age: 31,
    email: 'monica@friends.com',
  },
  {
    id: 6,
    name: 'Phoebe Buffay-Hannigan',
    age: 30,
    email: 'phoebe@friends.com',
  },
];

export const FriendsList = () => {
  return (
    <div>
      <button>Add A New Friend!</button>
      <h1>These are MY Friends!!!! 💌 </h1>
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        );
      })}
      <button>Add A New Friend!</button>
    </div>
  );
};
