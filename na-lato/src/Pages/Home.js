import React, { useEffect, useState } from 'react';
import '../index.css';
import Menu from '../menu.js';
import IconsSection from '../Components/icons.js';
import FeaturesSection from '../Components/features.js';
import TestimonialsSection from '../testimonials.js';
import ContactSection from '../contact.js';
import Footer from '../Components/footer.js';
import Gallery from '../Components/miniGallery.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../Zdj/bt-log-pro.png'; // Replace with the correct path to your logo


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "Dębki na lato";

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Menu />
      <div className={`fullscreen-image ${scrolled ? 'scrolled' : ''}`}>
        <div className="overlay"></div>
        <img src={logo} alt="Dębki na lato" className="logo" />
        <FontAwesomeIcon icon={faArrowDown} size="3x" className="arrow-down" />
      </div>
      <IconsSection />

      <div className="content">
        <FeaturesSection />
        <Gallery />

        
      </div>

      <Footer />
    </div>
  );
}

export default App;
