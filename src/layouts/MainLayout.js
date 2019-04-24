import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import { NOMBRE } from '../utils/constants';
import '../style/main.css';
import Header from '../components/Header';

const SCREEN_HEIGHT = window.innerHeight;

export default ({ children, language, onClick }) => (
  <div style={{ height: SCREEN_HEIGHT }}>
    <Helmet>
      <title>{NOMBRE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta
        name="description"
        content="Página web con las últimas noticias de la trayectoria profesional de Álvaro Fernández García, CV, Proyectos, Tecnologías más utilizadas..."
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
    </Helmet>
    <Header />
    {children}
    <Footer language={language} />
  </div>
);
