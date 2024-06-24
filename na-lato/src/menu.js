import React, { useEffect, useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import logo from './Zdj/bt-log-pro.png';

function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="nav" className={`${scrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="logo-container">
        <img className='logo' src={logo} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Strona Główna</Link></li>
        <li><Link to="/nasze-domki" onClick={toggleMobileMenu}>Nasze domki</Link></li>
        <li><Link to="/apartament" onClick={toggleMobileMenu}>Apartament</Link></li>
        <li><Link to="/gallery-p" onClick={toggleMobileMenu}>Galeria</Link></li>
        <li><Link to="/kontakt" onClick={toggleMobileMenu}>Kontakt</Link></li>
        <li><Link to="/regulamin" onClick={toggleMobileMenu}>Regulamin</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
