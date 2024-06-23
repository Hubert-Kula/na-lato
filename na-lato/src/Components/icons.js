import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library so you can use them dynamically
library.add(fas, far, fab);

const icons = [
  { icon: 'fa-house', title: '9 domków', description: 'dla swóch rodzin' },
  { icon: 'fa-umbrella-beach', title: '800m', description: 'od plaży' },
  { icon: 'fa-bed', title: '2 sypalnie', description: 'na domek' },
  { icon: 'fa-wifi', title: 'WI-FI', description: 'dostępne dla gości' },
];

const IconsSection = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '-50%',  // Reduced height
      marginTop: '20px',  // Added margin to position it higher
    },
    box: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '80%',
/*       backgroundColor: 'rgb(37, 140, 156)', */
      padding: '20px',
      borderRadius: '8px',
/*       boxShadow: '0 0 10px rgba(0,0,0,0.1)', */
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 10px',
    },
    icon: {
      marginBottom: '10px',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1.2em',
      marginBottom: '5px',
    },
    description: {
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        {icons.map((item, index) => (
          <div key={index} style={styles.iconContainer}>
            <FontAwesomeIcon icon={item.icon} size="3x" style={styles.icon} />
            <div style={styles.title}>{item.title}</div>
            <div style={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsSection;
