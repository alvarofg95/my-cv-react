import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import { NOMBRE } from '../utils/constants';
import '../style/main.css'

export default ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>{NOMBRE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="./style/main.css" />
      </Helmet>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};