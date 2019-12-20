import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../utils/routes';

export default () => (
  <Switch>
    {routes.map(({ exact, hashPath, component }) => (
      <Route exact={exact} path={hashPath} component={component} />
    ))}
  </Switch>
);
