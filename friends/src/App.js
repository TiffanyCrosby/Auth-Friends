import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import { FormLogin } from './components/FormLogin';
import { FriendsList } from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/login">Log In Here!</Link>
          </li>
          <li>
            <Link to="/protected">Logged In Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/protected" component={FriendsList} />
          <Route path="/login" component={FormLogin} />
          <Route component={FormLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
