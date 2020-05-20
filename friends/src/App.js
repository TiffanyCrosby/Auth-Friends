import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { FormLogin } from './components/FormLogin';
import { FriendsList } from './components/FriendsList';
import { PrivateRoute } from './components/PrivateRoute';
import { AddNewFriend } from './components/AddNewFriend';

function App() {
  return (
    <div className="App">
      <Router>
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
