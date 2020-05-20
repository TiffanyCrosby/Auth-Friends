import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const AddNewFriend = ({ setFriends }) => {
  const [addFriend, setAddFriend] = useState({});
  const history = useHistory();

  const handleOnChange = (event) => {
    setAddFriend({ ...addFriend, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/friends', addFriend)
      .then((res) => {
        console.log('Response from AddNewFriend post request', res);
        setFriends(res.data, addFriend);
        history.push('/friendList');
      })
      .catch((error) =>
        console.log('Error from AddNewFriend post request ', error)
      );
    setAddFriend({ name: '', age: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name Here"
        value={addFriend.name}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Enter Age Here"
        value={addFriend.age}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email Here"
        value={addFriend.email}
        onChange={handleOnChange}
      />
      <button type="submit">Add Me, Add ME!!!</button>
    </form>
  );
};
