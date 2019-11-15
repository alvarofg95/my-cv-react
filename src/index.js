import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';
import { setPolyfills } from './utils/utils';
import * as serviceWorker from './serviceWorker';
import './style/main.css';
import './style/projects.css';

WebFont.load({
  google: {
    families: ['Poppins']
  }
});

setPolyfills();

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
