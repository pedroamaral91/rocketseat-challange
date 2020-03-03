import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../screens/login';
import Home from '../screens/home';
import PrivateRoutes from './private-routes';
import Deliveryman from '../screens/deliveryman';
import AppTemplate from '../components/template';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact>
      <Login />
    </Route>
    <AppTemplate>
      <PrivateRoutes path="/" component={Home} exact />
      <PrivateRoutes path="/deliveryman" component={Deliveryman} exact />
    </AppTemplate>
  </Switch>
);

export default Routes;
