import React from 'react';
import CustomButton from './CustomButton';

export default () => (
  <form name="contact" method="POST" data-netlify="true" netlify action="/contacto">
    <div className="display-inline-flex">
      <span className="spanForm">Nombre</span>
      <input className="inputForm" name="name" type="text" />
    </div>
    <br />
    <div className="display-inline-flex">
      <span className="spanForm">Email</span>
      <input className="inputForm" name="email" type="email" />
    </div>
    <br />
    <div className="display-inline-flex">
      <span className="spanForm">Mensaje</span>
      <textarea className="inputForm textarea" name="message" type="text" />
    </div>
    <br />
    <CustomButton text="Enviar" type="submit" />
  </form>
);
