import React from 'react';

const TestimonialsSection = () => {
  const styles = {
    container: {
      padding: '50px 20px',
      backgroundColor: '#ffffff',
      textAlign: 'center',
    },
    testimonialBox: {
      marginBottom: '20px',
    },
    name: {
      fontWeight: 'bold',
    },
    feedback: {
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Testimonials</h2>
      <div style={styles.testimonialBox}>
        <p style={styles.name}>John Doe</p>
        <p style={styles.feedback}>Amazing experience!</p>
      </div>
      <div style={styles.testimonialBox}>
        <p style={styles.name}>Jane Smith</p>
        <p style={styles.feedback}>Loved every moment.</p>
      </div>
      <div style={styles.testimonialBox}>
        <p style={styles.name}>Sam Wilson</p>
        <p style={styles.feedback}>Would definitely come back.</p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
