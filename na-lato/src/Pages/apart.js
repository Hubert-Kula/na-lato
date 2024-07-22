import React from 'react';
import '../static/styles/nd.css';
import Menu from '../menu';
import Gallery from '../Components/apart-gallery.js';

const Apartament = () => {
  const categories = {
    'SALONIK Z ANEKSEM KUCHENNYM': [
      { icon: 'chair', label: 'Sofa narożna rozkładana - spanie dla 2 osób' },
      { icon: 'tv', label: 'Telewizor' },
      { icon: 'shelves', label: 'Szafa ubraniowa oraz komoda' },
      { icon: 'table_bar', label: 'Stolik kawowy' },
      { icon: 'microwave', label: 'Aneks kuchenny wyposażony w pełni do gotowania i spożywania posiłków' },
    ],
    'ŁAZIENKA': [
      { icon: 'wc', label: 'Toaleta' },
      { icon: 'shower', label: 'Prysznic' },
      { icon: 'soap', label: 'Umywalka' },
      { icon: 'error', label: 'Na wyposażeniu nie ma ręczników' },
    ],
    'TARAS': [
      { icon: 'table_bar', label: 'Stolik z dwoma krzesłami' },
      { icon: 'deck', label: '2 leżaki i parawan plażowy' },
    ],
    'DODATKOWE MOŻLIWOŚCI WYPOŻYCZENIA': [
      { icon: 'child_friendly', label: 'Łóżeczko turystyczne dziecięce (bez pościeli)' },
      { icon: 'bathtub', label: 'Wanienka do kąpieli dziecka' },
      { icon: 'iron', label: 'Żelazko z deską do prasowania' },
      { icon: 'coffee_maker', label: 'Ekspres do kawy' },
    ],
  };

  return (
    <div className="relative">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <div className="bg-blue-500 h-33vh w-full flex items-center justify-center text-white text-4xl font-bold">
        Apartament 2-osobowy
      </div>
      <div className="text-left mt-4 p-4">
        <p className="text-lg">
          Jeśli domek jest dla Państwa za duży, wybieracie się na urlop we dwójkę, mamy do zaoferowania niewielki apartament 2-osobowy z aneksem kuchennym, łazienką i tarasikiem.
        </p>
        <p className="text-lg">
          Pokój jest kameralny, bardzo przyjemny i wygodny.
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
                  <p className="text-lg">{item.label}</p>
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
          <li>Doba noclegowa zaczyna się od godziny 14.00, kończy o 10.00.</li>
          <li>W apartamencie obowiązuje całkowity zakaz palenia.</li>
          <li>Po przyjeździe do apartamentu pobierana jest kaucja zwrotna w wysokości 500 zł.</li>
          <li>Warunkiem pełnej rezerwacji apartamentu jest wpłata zadatku w wysokości 30% wartości pobytu.</li>
          <li>W przypadku odwołania rezerwacji zadatek nie podlega zwrotowi.</li>
          <li>Zapraszamy bez zwierząt.</li>
        </ul>
      </div>
    </div>
  );
};

export default Apartament;
