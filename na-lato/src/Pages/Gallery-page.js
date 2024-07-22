import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import '../static/styles/PhotoGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import photo1 from '../static/media/Gallery/16/723A3815.jpg';
import photo2 from '../static/media/Gallery/16/723A3826.jpg';
import photo3 from '../static/media/Gallery/16/723A3828.jpg';
import photo4 from '../static/media/Gallery/16/723A3834.jpg';
import photo5 from '../static/media/Gallery/16/723A3838.jpg';
import photo6 from '../static/media/Gallery/16/723A3847.jpg';
import photo7 from '../static/media/Gallery/16/723A3849.jpg';
import photo8 from '../static/media/Gallery/16/723A3857.jpg';
import photo9 from '../static/media/Gallery/16/723A3872 kopia.jpg';
import photo10 from '../static/media/Gallery/16/723A4353.jpg';
import photo11 from '../static/media/Gallery/16/723A4360.jpg';
import photo12 from '../static/media/Gallery/16/723A4509.jpg';
import photo13 from '../static/media/Gallery/16/723A4512.jpg';
import photo14 from '../static/media/Gallery/16/723A4520.jpg';
import photo15 from '../static/media/Gallery/16/kuter.jpg';
import photo16 from '../static/media/Gallery/16/set lazienka.jpg';
import photo17 from '../static/media/Gallery/16/_MG_8443.jpg';
import photo18 from '../static/media/Gallery/16/_MG_8447.jpg';
import photo19 from '../static/media/Gallery/16/_MG_8450.jpg';
import photo20 from '../static/media/Gallery/16/_MG_8455.jpg';

library.add(faChevronLeft, faChevronRight);

Modal.setAppElement('#root');

const photos = [
  { src: photo1, description: " " },
  { src: photo2, description: " " },
  { src: photo3, description: " " },
  { src: photo4, description: " " },
  { src: photo5, description: " " },
  { src: photo6, description: " " },
  { src: photo7, description: " " },
  { src: photo8, description: " " },
  { src: photo9, description: " " },
  { src: photo10, description: "" },
  { src: photo11, description: "" },
  { src: photo12, description: "" },
  { src: photo13, description: "" },
  { src: photo14, description: "" },
  { src: photo15, description: "" },
  { src: photo16, description: "" },
  { src: photo17, description: "" },
  { src: photo18, description: "" },
  { src: photo19, description: "" },
  { src: photo20, description: "" }
];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(0);
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="photo-gallery">
      <div className="gallery-header">
        <h2 id='n7x2'>Galeria</h2>
      </div>
      <div className="thumbnails-container">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="thumbnail-wrapper"
            whileHover={{ scale: 1.1 }}
            onClick={() => openModal(index)}
          >
            <img
              src={photo.src}
              alt={`photo-${index}`}
              className="photo-thumbnail"
            />
            <div>
              <p className='du'>{photo.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="modal-content"
          >
            <button className="modal-nav-btn prev" onClick={prevPhoto}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img src={photos[currentIndex].src} alt="Selected" className="modal-image" />
            <div className="modal-description">
              <span>{photos[currentIndex].description}</span>
            </div>
            <button className="modal-nav-btn next" onClick={nextPhoto}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </motion.div>
        )}
      </Modal>
    </div>
  );
};

export default PhotoGallery;
