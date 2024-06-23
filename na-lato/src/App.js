import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './menu';
import Home from './Pages/Home';
import GalleryPage from './Pages/Gallery-page';
import Kontakt from './Pages/kontakt';
import NaszeDomki from './Pages/nasze-domki';
import Regulamin from './Pages/Regulamin'; // Import regulaminu

function App() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
