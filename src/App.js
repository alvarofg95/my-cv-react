import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Contact from './pages/Contact';
import Curriculum from './pages/Curriculum';
import Projects from './pages/Projects';
import Menu from './components/Menu';

const App = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" render={() => <Curriculum />} />
      <Route exact path="/contacto" render={() => <Contact />} />
      <Route exact path="/proyectos" render={() => <Projects />} />
    </Switch>
  </div>
);

export default withRouter(App);
