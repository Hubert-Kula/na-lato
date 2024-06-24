import React from 'react';
import '../static/styles/nd.css'; // Twój własny styl CSS
import Menu from '../menu';
import Gallery from '../Components/apart-gallery.js'

const apart = () => {
  const categories = {
    'Salonik z aneksem kuchennym': [
      { icon: 'chair', label: 'rogówka, która w nocy służy do spania dla dwojga' },
      { icon: 'tv', label: 'telewizor' },
      { icon: 'shelves', label: 'regał' },
      { icon: 'table_bar', label: 'stolik kawowy' },
      { icon: 'fireplace', label: 'grzejnik' },
      { icon: 'microwave', label: 'aneks kuchenny wyposażony w pełni do gotowania i spożywania posiłków' },
    ],
    'Łazienka': [
      { icon: 'wc', label: 'toaleta' },
      { icon: 'shower', label: 'prysznic' },
      { icon: 'soap', label: 'umywalka' },
      { icon: 'error', label: 'na wyposażeniu nie ma ręczników' },
    ],
    'Taras': [
      { icon: 'table_bar', label: 'stolik z dwoma krzesłami' },
      { icon: 'outdoor_grill', label: 'grill' },
      { icon: 'deck', label: '2 leżaki i parawan' },
    ],
  };

  return (
    <div className="relative">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <div className="bg-blue-500 h-33vh w-full flex items-center justify-center text-white text-4xl font-bold">
        Apartament
      </div>
      <div className="text-center mt-4 p-4">
        <p className="text-lg">
          Jeśli:
          <ul className="list-disc pl-8">
            <li>domek jest dla Was za duży</li>
            <li>jesteście tylko w dwójkę</li>
            <li>chcą pojechać z Wami dziadkowie lub znajomi</li>
          </ul>
          Mamy do zaoferowania nową opcję zakwaterowania na terenie ośrodka - pokój dwuosobowy z aneksem kuchennym, łazienką i tarasikiem. Pokój jest nie duży, kameralny, bardzo przyjemny i komfortowy.
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
      <Gallery />
      <div className="bg-gray-100 p-4 mt-4">
        <h2 className="text-2xl font-bold mb-4">WAŻNE INFORMACJE</h2>
        <ul className="list-disc pl-8">
          <li>Doba noclegowa rozpoczyna się od godz.15:00 , kończy o godz.10:00.</li>
          <li>Pokój NIE jest wyposażony w ręczniki oraz koce plażowe.</li>
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

export default apart;
