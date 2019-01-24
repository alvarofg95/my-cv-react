import React from 'react';
import Head from 'next/head';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import { NOMBRE } from '../utils/constants';

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>{NOMBRE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="../static/style/main.css" />
      </Head>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};
