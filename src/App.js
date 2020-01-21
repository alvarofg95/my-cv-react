import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next/dist/es/withTranslation';
import Menu from './components/Menu';
import RouterControl from './components/Router/RouterControl';

const App = () => (
  <Fragment>
    <Menu />
    <RouterControl />
  </Fragment>
);

export default withRouter(withTranslation()(App));
