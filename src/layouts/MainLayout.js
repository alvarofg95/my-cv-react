import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import { NOMBRE } from '../utils/constants';
import '../style/main.css';
import Header from '../components/Header';

const SCREEN_HEIGHT = window.innerHeight;

export default ({ children, language, onClick }) => (
  <div style={{ height: SCREEN_HEIGHT }}>
    <Header />
    {children}
    <Footer language={language} />
  </div>
);
