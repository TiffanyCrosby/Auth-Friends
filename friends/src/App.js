import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import { FormLogin } from './components/FormLogin';
import { FriendsList } from './components/FriendsList';
import { PrivateRoute } from './components/PrivateRoute';
import { AddNewFriend } from './components/AddNewFriend';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/login">To Login Page </Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/friendList" component={FriendsList} />
          <PrivateRoute path="/addNewFriend" component={AddNewFriend} />
          <Route path="/login" component={FormLogin} />
          <Route component={FormLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
