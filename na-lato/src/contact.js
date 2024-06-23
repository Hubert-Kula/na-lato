import React from 'react';

const ContactSection = () => {
  const styles = {
    container: {
      padding: '50px 20px',
      backgroundColor: '#e6f7f8',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: 'rgb(42, 182, 203)',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.input} rows="5"></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactSection;
