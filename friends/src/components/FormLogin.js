import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// const token = {};

export const FormLogin = (props) => {
  const [loginInput, setLoginInput] = useState({});
  //   console.log(loginInput);
  const history = useHistory();

  const handleOnchange = (event) => {
    setLoginInput({ ...loginInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', loginInput)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friendList');
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
