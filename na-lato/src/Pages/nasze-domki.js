import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faTv, faCouch, faShower, faBicycle, faWifi, faUmbrellaBeach, faSwimmer, faCoffee, faWineGlass } from '@fortawesome/free-solid-svg-icons';

// Placeholder for miniGallery component
const MiniGallery = () => {
  return <div>Gallery Placeholder</div>;
};

const NaszeDomki = () => {
  return (
    <div style={{ backgroundColor: 'rgb(42, 182, 203)', color: 'white', padding: '20px' }}>
      <h1>Nasze domki</h1>
      <p>Na górze na niebieski tel</p>
      <MiniGallery /> {/* Użycie poprawnego komponentu */}

      <div style={{ backgroundColor: 'white', color: 'black', padding: '20px', borderRadius: '10px' }}>
        <h2><FontAwesomeIcon icon={faBed} /> Sypialnia</h2>
        <ul>
          <li>2 sypialnie, w każdej łóżko małżeńskie i łóżko pojedyncze</li>
        </ul>

        <h2><FontAwesomeIcon icon={faUtensils} /> Aneks kuchenny</h2>
        <ul>
          <li>sztućce, talerze, szklanki, kubki, kieliszki, lampki na wino</li>
          <li>deska do krojenia</li>
          <li>noże</li>
          <li>płyta grzewcza 2 palnikowa</li>
          <li>lodówka</li>
          <li>mikrofala</li>
          <li>czajnik elektryczny</li>
          <li>ekspres do kawy</li>
          <li>garnki</li>
          <li>zestaw przyborów kuchennych do gotowania i smażenia</li>
        </ul>

        <h2><FontAwesomeIcon icon={faTv} /> Salon</h2>
        <ul>
          <li>telewizor LCD</li>
          <li>rogówka</li>
          <li>stolik śniadaniowy z 4 krzesłami</li>
          <li>kominek</li>
          <li>szafa</li>
          <li>parawan plażowy</li>
          <li>leżaki</li>
          <li>dostęp WiFi do internetu</li>
          <li>żelazko</li>
          <li>suszarka na ubrania</li>
        </ul>

        <h2><FontAwesomeIcon icon={faShower} /> Łazienka</h2>
        <ul>
          <li>toaleta</li>
          <li>prysznic</li>
          <li>umywalka</li>
          <li>szafka</li>
          <li>domki nie są wyposażone w ręczniki</li>
        </ul>

        <h2><FontAwesomeIcon icon={faUmbrellaBeach} /> Taras</h2>
        <ul>
          <li>stół + 6 krzeseł</li>
          <li>grill</li>
        </ul>

        <h2><FontAwesomeIcon icon={faSwimmer} /> Dodatkowe możliwości</h2>
        <ul>
          <li>możliwość wypożyczenia łóżeczka turystycznego dziecięcego (bez pościeli)</li>
          <li>wanienki do kąpieli dziecka</li>
          <li>krzesełka dziecięcego do jedzenia</li>
          <li>do dyspozycji gości posiadamy również rowery i kaski dla dzieci</li>
        </ul>

        <p>Naszych letników dowozimy na plażę meleksem :))</p>
        <p>Doba noclegowa 15:00 - 10:00</p>
      </div>
    </div>
  );
};

export default NaszeDomki;
