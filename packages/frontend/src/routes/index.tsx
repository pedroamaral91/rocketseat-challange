import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
  </Switch>
);

export default Routes;
