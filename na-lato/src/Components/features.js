import React from 'react';

const FeaturesSection = () => {
  const styles = {
    container: {
      padding: '50px 20px',
      textAlign: 'left',
      borderRadius: '50px'
    },
    featureBox: {
      marginBottom: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      padding: '10px',
      borderRadius: '15px'
    },
    title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: 'rgb(39, 78, 183)',
      marginTop: '0.5px',
            marginBottom: '5px'

    },
    description: {
      marginTop: '10px',
      marginBottom: '5px',
      fontSize: '20px'
    },
  };

  return (
    <div style={styles.container}>
{/*       <h2 style={styles.title}>Features</h2> */}
      <div style={styles.featureBox}>
{/*         <h3 style={styles.title}>Feature 1</h3> */}
        <p style={styles.description}>Serdecznie zapraszamy do Dębek, gdzie spędzisz wyczekiwany urlop w wyjątkowym miejscu. Wybierając letni pobyt wakacyjny w miejscowości Dębki odkryją Państwo w pełni zalety wypoczynku nad morzem w Polsce, wśród pięknej przyrody. Piękna, szeroka plaża, czyste wody Bałtyku oraz rzeki Piaśnica, dziewicza przyroda - to wszystko tworzy niepowtarzalną, wakacyjną atmosferę.</p>
      </div>
{/*       <div style={styles.featureBox}>
        <h3 style={styles.title}>Feature 2</h3>
        <p style={styles.description}>Description of feature 2.</p>
      </div>
      <div style={styles.featureBox}>
        <h3 style={styles.title}>Feature 3</h3>
        <p style={styles.description}>Description of feature 3.</p>
      </div> */}
    </div>
  );
};

export default FeaturesSection;
