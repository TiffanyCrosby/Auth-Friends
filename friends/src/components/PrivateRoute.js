import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const token = localStorage.getItem('token');

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
