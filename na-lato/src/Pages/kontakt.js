import React from 'react';
import '../static/styles/kontakt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFacebook } from '@fortawesome/free-solid-svg-icons';

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <div className="kontakt-header">
        <h1>Kontakt</h1>
      </div>
      <div className="kontakt-content">
        <p><FontAwesomeIcon icon={faPhone} /> +48 570 604 001</p>
        <a href='mailto: kontakt@na-lato.pl'><FontAwesomeIcon icon={faEnvelope} /> kontakt@na-lato.pl</a>
        <p>
        <FontAwesomeIcon icon="fa-brands fa-facebook" />  
          <a href="https://www.facebook.com/bohaczykowo" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
      </div>
    </div>
  );
};

export default Kontakt;