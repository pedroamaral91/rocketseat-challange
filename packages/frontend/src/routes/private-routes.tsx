import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { ApplicationState } from '../store/modules/index';

interface PrivateRoutes {
  path: string
  exact?: boolean
  component: React.FC
}

const PrivateRoutes: React.FC<PrivateRoutes> = ({ component, path, exact }) => {
  const signed = useSelector((state: ApplicationState) => state.authReducer.signed);

  if (!signed) {
    return <Redirect from="/" to={{ pathname: '/login' }} />;
  }

  return (
    <Route component={component} path={path} exact={exact} />
  );
};

export default PrivateRoutes;
