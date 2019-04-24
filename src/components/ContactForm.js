import React from 'react';
import ReactDOM from 'react-dom';
import NetlifyForm from 'react-netlify-form';
import CustomButton from './CustomButton';

export default () =>
  ReactDOM.render(
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
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
      <button type="submit">Enviar</button>
    </form>
  );
