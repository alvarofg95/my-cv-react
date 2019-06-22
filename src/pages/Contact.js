import React from 'react';

export default () => (
  <div className="contactForm">
    <h1>Página de Contacto</h1>
    <p>Desde nuestra web intentamos ayudar a toda persona que tenga
          alguna duda sobre los <b>Pendrives</b>, desde su definición,
          a los tipos de <b>memoria USB</b> existentes o ayudarte a
          saber cuál es el <b>USB</b> que te conviene según el uso que
  le quieras dar.
      </p>
    <p>Además, en nuestra lista de productos recomendados, accederás
          a <b>AMAZON</b> para la compra directa del producto, y de
  esta forma poder ayudarnos económicamente a que el proyecto
          siga adelante. También nos puedes ayudar comprando en <b>AMAZON</b> directamente accediendo desde nuestro banner.
      </p>
    <iframe className="bannerComputer" title="bannerAmazon"
      src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ez&f=ifr&linkID=f33a00657b5ffb1139b3829ab2b0e3e7&t=alvarofg95d08-21&tracking_id=alvarofg95d08-21"
      width="728" height="90" scrolling="no" border="0"
      marginWidth="0" style={{ border: 'none' }} frameBorder="0"></iframe>
    <iframe className="bannerMobile" title="bannerAmazonMobiles"
      src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=12&l=ez&f=ifr&linkID=e011b0e19936cff0c98b4ccc634e7215&t=alvarofg95d08-21&tracking_id=alvarofg95d08-21"
      width="300" height="250" scrolling="no" border="0"
      marginWidth="0" style={{ border: 'none' }} frameBorder="0"></iframe>
    <p className="margin-bottom-40">
      Al email que te dejamos abajo, podrás enviarnos todas tus
      dudas que no hayamos podido resolver, preguntar por algún
          <b>Pendrive</b> específico que no encuentres en nuestra
  página, o cualquier propuesta para mejorar nuestra página
  web.
      </p>
    <span className="email-span">pendrives.contacto@gmail.com</span>
    <p className="text-center margin-top-40">Muchas gracias por visitar
        nuestra página y esperamos que
          hayas disfrutado al navegar por ella. ¡UN SALUDO!</p>
  </div>
);
