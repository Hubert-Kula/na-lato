import React, { useEffect } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import logo from './Zdj/bt-log-pro.png'; // Upewnij się, że ścieżka jest poprawna

function Menu() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(51, 51, 51, 0.91)';
      } else {
        nav.style.backgroundColor = 'rgba(51, 51, 51, 0)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="nav">
      <img className='logo' src={logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Strona Główna</Link>
        </li>
        <li>
          <Link to="/nasze-domki">Nasze domki</Link>
        </li>
        <li>
          <Link to="/apartament">Apartament</Link>
        </li>
        <li>
          <Link to="/gallery-p">Galeria</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/regulamin">Regulamin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
