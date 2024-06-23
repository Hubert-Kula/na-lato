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
        <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lobortis tortor. Donec mauris dolor, venenatis et orci ac, facilisis bibendum erat. Cras blandit lobortis arcu. Vestibulum bibendum vestibulum ipsum, ut placerat est bibendum aliquam. Vestibulum malesuada mauris et nisi convallis dignissim. Nam quis odio tortor. Duis ut sapien tincidunt, gravida dui in, accumsan ipsum.

Donec ornare interdum neque, rhoncus fringilla urna pulvinar nec. Donec efficitur feugiat eros vitae cursus. Vivamus eu varius erat, luctus gravida purus. Cras sollicitudin ligula ut elit tempor accumsan. Mauris ut arcu quis eros dictum finibus a vel dui. Nulla facilisi. Nulla malesuada, ante ac varius faucibus, mauris augue dignissim dui, et volutpat justo dolor quis neque. Donec sit amet sem vel elit pharetra fermentum rhoncus a ex. Vivamus quis gravida massa, in tincidunt augue. In rutrum tristique posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc et placerat eros. Quisque ultricies gravida diam ac fermentum.</p>
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
