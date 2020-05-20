import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FormLogin = () => {
  const [loginInput, setLoginInput] = useState({ username: '', password: '' });
  //   console.log(loginInput);
  const history = useHistory();

  const handleOnchange = (event) => {
    setLoginInput({ ...loginInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/login', loginInput)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        history.push('/friendList');
      })
      .catch((error) => console.log('Error from postLogin request ', error));
    setLoginInput({ username: '', password: '' });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Log In to Adjust Your Friends!</h1>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={loginInput.username}
          placeholder="Username"
          onChange={handleOnchange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={loginInput.password}
          placeholder="Password"
          onChange={handleOnchange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
