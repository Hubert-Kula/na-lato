import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import '../static/styles/PhotoGallery.css'; // Upewnij się, że ścieżka do CSS jest poprawna

// Import zdjęć
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

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
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
            onClick={() => openModal(photo)}
          >
            <img 
              src={photo} 
              alt={`photo-${index}`} 
              className="photo-thumbnail"
            />
          </motion.div>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="modal-content"
          >
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </motion.div>
        )}
      </Modal>
    </div>
  );
};

export default PhotoGallery;
