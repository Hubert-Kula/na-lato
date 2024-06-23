import React from 'react';

const photos = [
  {
    id: 1,
    src: 'https://placeimg.com/600/400/nature',
    alt: 'Nature'
  },
  {
    id: 2,
    src: 'https://placeimg.com/600/400/animals',
    alt: 'Animals'
  },
  {
    id: 3,
    src: 'https://placeimg.com/600/400/architecture',
    alt: 'Architecture'
  }
  // Dodaj więcej zdjęć według potrzeb
];

const MiniGallery = () => {
  const handleClick = (photo) => {
    // Tu możesz obsłużyć kliknięcie na zdjęcie
    console.log(`Kliknięto zdjęcie: ${photo.alt}`);
  };

  return (
    <div className="mini-gallery">
      {photos.map(photo => (
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          onClick={() => handleClick(photo)}
          className="mini-gallery-item"
        />
      ))}
    </div>
  );
};

export default MiniGallery;
