import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import PrivateRoutes from './private-routes';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact>
      <Login />
    </Route>
    <PrivateRoutes path="/" component={Home} exact />
  </Switch>
);

export default Routes;
