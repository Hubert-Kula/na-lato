import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './menu';
import Home from './Pages/Home';
import GalleryPage from './Pages/Gallery-page';
import Kontakt from './Pages/kontakt';
import NaszeDomki from './Pages/nasze-domki';
import Regulamin from './Pages/regulamin'; // Import regulaminu
import Apart from './Pages/apart.js';

function App() {
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      // Możesz przechowywać event, aby go później użyć, np. po kliknięciu przez użytkownika przycisku "Dodaj do ekranu głównego"
      // window.deferredPrompt = e;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery-p" element={<GalleryPage />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/nasze-domki" element={<NaszeDomki />} />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path='/apartament' element={<Apart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
