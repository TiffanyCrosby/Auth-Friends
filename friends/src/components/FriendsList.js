import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Friend } from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { AddNewFriend } from './AddNewFriend';

export const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  // console.log({ friends });

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then((response) => {
        console.log(response);
        setFriends(response.data);
      })
      .catch((error) =>
        console.log('Error from FriendsList get request', error)
      );
  }, []);

  const deletehandleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .delete('/api/friends/:id', friends)
      .then((res) => {
        console.log('Response from FriendsList delete request', res);
        setFriends([
          ...friends,
          {
            friends: friends.filter((besty) => {
              if (besty.id === friends.id) {
                return null;
              } else return friends;
            }),
          },
        ]);
      })
      .catch((error) =>
        console.log('Error from FriendsList delet request ', error)
      );
    setFriends([]);
  };

  return (
    <div>
      {/* <button onClick={() => <Route path="/addNewFriend" />}>
        Add A New Friend!
      </button> */}
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
      <AddNewFriend setFriends={setFriends} />
      <button onClick={deletehandleSubmit}>Delet A Mean Friend!</button>
    </div>
  );
};
