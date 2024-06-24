import React from 'react';
import '../static/styles/nd.css'; // Twój własny styl CSS
import Menu from '../menu';
import Gallery from '../Components/nd-gallery.js'

const naszeDomki = () => {
  const categories = {
    'Salonik na parterze': [
      { icon: 'chair', label: 'sofa narożna' },
      { icon: 'table_bar', label: 'stół z 4 krzesłami' },
      { icon: 'checkroom', label: 'szafa ubraniowa' },
      { icon: 'tv', label: 'telewizor' },
      { icon: 'fireplace', label: 'kominek' },
    ],
    'Aneks kuchenny na parterze': [
      { icon: 'soup_kitchen', label: 'płyta grzewcza 2 palnikowa' },
      { icon: 'kitchen', label: 'lodówka' },
      { icon: 'microwave', label: 'kuchenka mikrofalowa' },
      { icon: 'coffee', label: 'czajnik elektryczny' },
      { icon: 'kitchen', label: 'naczynia, sztućce, garnki i patelnia' },
    ],
    'Łazienka na parterze': [
      { icon: 'shower', label: 'z kabiną prysznicową' },
    ],
    'Piętro z dwiema sypialniami': [
      { icon: 'king_bed', label: '1 łóżko małżeńskie i 1 pojedyncze' },
      { icon: 'window', label: 'okna mają zasłonki zaciemniające' },
    ],
    'Taras zadaszony': [
      { icon: 'deck', label: 'Taras zadaszony' },
    ],
    'Dodatkowe możliwości nieodpłatnego wypożyczenia': [
      { icon: 'child_friendly', label: 'łóżeczko turystyczne dziecięce (bez pościeli)' },
      { icon: 'bathtub', label: 'wanienka do kąpieli dziecka' },
      { icon: 'iron', label: 'żelazko z deską do prasowania' },
      { icon: 'coffee_maker', label: 'ekspres do kawy' },
      { icon: 'outdoor_grill', label: 'grill' },
      { icon: 'directions_bike', label: 'rower' },
    ],
  };

  return (
    <div className="relative">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <div className="bg-blue-500 h-33vh w-full flex items-center justify-center text-white text-4xl font-bold">
        Nasze domki
      </div>
      <div className="text-center mt-4 p-4">
        <p className="text-lg">
          Do Państwa dyspozycji 9 drewnianych 6-osobowych domków o pow. 47 m2 z zadaszonym tarasem. Obiekt znajduje się w spokojnej i cichej części Dębek, w pobliżu ujścia Piaśnicy, jest ogrodzony. Na terenie posiadamy miejsca parkingowe dla Gości oraz plac zabaw z atrakcjami dla najmłodszych (zjeżdżalnie, huśtawki, mała ścianka wspinaczkowa, piaskownica i okręt piracki). Dysponujemy również kilkoma rowerami.
          Zapewniamy dostęp do internetu przez WiFi. Na plażę do wejść nr 23 i 24 mamy ok. 900 m.
          W odległości ok.100 m od ośrodka znajduje się sklep spożywczy, obok można zjeść smaczne obiady domowe.
        </p>
      </div>
      <div className="icons-page bg-gray-100 py-12 px-4 relative z-10">
        {Object.keys(categories).map(category => (
          <div key={category} className="category mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <ul>
              {categories[category].map(item => (
                <li key={item.label} className="flex items-center mb-2">
                  <span className="material-icons text-blue-500 text-3xl mr-4">{item.icon}</span>
                  <p className="text-lg font-semibold">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Gallery></Gallery>
      <div className="bg-gray-100 p-4 mt-4">
        <h2 className="text-2xl font-bold mb-4">WAŻNE INFORMACJE</h2>
        <ul className="list-disc pl-8">
          <li>Doba noclegowa rozpoczyna się od godz.15:00 , kończy o godz.10:00.</li>
          <li>Domki NIE są wyposażone w ręczniki oraz koce plażowe.</li>
          <li>Podczas Państwa pobytu nie uzupełniamy zapasów, prosimy indywidualnie zaopatrzyć się w środki higieny i artykuły spożywcze.</li>
          <li>Nie przyjmujemy grup młodzieżowych, wieczorów panieńskich, kawalerskich, itp.</li>
          <li>Spokojne zwierzaki mile widziane.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-4">OPŁATY</h2>
        <p>
          Potwierdzeniem rezerwacji jest przelew zadatku na nasze konto. Pozostała część kwoty płatna w dniu przyjazdu.
          Pobieramy opłatę klimatyczną w wysokości 2,50 pln za osobę/1 dzień.
          Nie pobieramy dodatkowych opłat za prąd i wodę, za sprzątanie końcowe (wszystko jest wliczone w cenę wynajmu).
          Ceny ustalamy indywidualnie w zależności od ilości osób i długości pobytu – prosimy o kontakt telefoniczny lub mailowy.
          Z radością czekamy na Państwa przyjazd!
        </p>
      </div>
    </div>
  );
};

export default naszeDomki;
