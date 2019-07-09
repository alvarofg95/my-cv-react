import React from 'react';

export default () => (
  <div className="contactForm">
    <h1>Página de Contacto</h1>
    <p>
      Me llamo Álvaro y soy un programador que busca superarse y dar lo mejor de mí mismo cada día.
      Si quieres contactar conmigo no dudes en enviar un correo electrónico al email:
      alvarofg95job@gmail.com
    </p>
    <p>
      Si quieres apoyarme económicamente puedes acceder a AMAZON desde el siguiente banner para
      comprar.
    </p>
    <iframe
      className="bannerComputer"
      title="bannerAmazon"
      src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ez&f=ifr&linkID=f33a00657b5ffb1139b3829ab2b0e3e7&t=alvarofg95d08-21&tracking_id=alvarofg95d08-21"
      width="728"
      height="90"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: 'none' }}
      frameBorder="0"
    />
    <iframe
      className="bannerMobile"
      title="bannerAmazonMobiles"
      src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=12&l=ez&f=ifr&linkID=e011b0e19936cff0c98b4ccc634e7215&t=alvarofg95d08-21&tracking_id=alvarofg95d08-21"
      width="300"
      height="250"
      scrolling="no"
      border="0"
      marginWidth="0"
      style={{ border: 'none' }}
      frameBorder="0"
    />
    <p className="margin-bottom-40">
      Muchas gracias por tu visita y espero que te haya gustado mi página web.
    </p>
  </div>
);
