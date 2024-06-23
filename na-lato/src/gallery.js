import React from 'react';

const GallerySection = () => {
  const images = [
    require ("./Zdj/723A3815.jpg"),
    "https://images.unsplash.com/photo-1542546067-f6ca8f8d2e37",
    "https://images.unsplash.com/photo-1532375810709-75a6c91c7d1f",
    "https://images.unsplash.com/photo-1566740933438-6bab80b13323",
    "https://images.unsplash.com/photo-1588392382834-a891154bca4d",
    "https://images.unsplash.com/photo-1566740933438-6bab80b13323"
  ];

  const styles = {
    container: {
      padding: '50px 20px',
      backgroundColor: '#e6f7f8',
      textAlign: 'center',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: 'rgb(42, 182, 203)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Gallery</h2>
      <div style={styles.gallery}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery image ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
