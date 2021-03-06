import React from 'react';

export default () => (
  <div>
    <form name="contact" netlify hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message" />
    </form>
    <form name="contact" method="post" data-netlify="true">
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
  </div>
);
