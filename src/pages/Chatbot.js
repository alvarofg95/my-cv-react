import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default () => (
  <MainLayout>
    <div id="embedded_messenger">
      <iframe className="botPage" id="botkit_client" src="https://dialogflowfront-alvarofg95.herokuapp.com/" />
    </div>
  </MainLayout>
);
