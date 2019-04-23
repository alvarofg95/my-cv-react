import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';

export default () => (
  <MainLayout>
    <div className="contactForm">
      <h1>Página de Contacto</h1>
      <p>
        Si tienes algún interés en contactar conmigo no dudes en mandarme un mensaje con cualquier
        duda.
      </p>
      <ContactForm />
    </div>
  </MainLayout>
);
