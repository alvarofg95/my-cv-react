import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Contact from './pages/Contact';
import Curriculum from './pages/Curriculum';
import Header from './components/Header';
import Chatbot from './pages/Chatbot';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <Curriculum />} />
      <Route exact path="/contacto" render={() => <Contact />} />
      <Route exact path="/chatbot" render={() => <Chatbot />} />
    </Switch>
  </div>
);

export default withRouter(App);
