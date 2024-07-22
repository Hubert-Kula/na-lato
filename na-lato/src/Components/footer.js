import React from 'react';

const Footer = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <p>&copy; 2024 Dębki na lato. Strona objęta prawami autorskimi. Wykorzystywanie jej lub jakichkolwiek jej elementów bezzgody właściciela jest naruszeniem przepisów dot. praw autorskich.</p>
    </div>
  );
};

export default Footer;
