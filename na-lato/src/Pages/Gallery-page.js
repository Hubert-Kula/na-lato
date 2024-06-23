import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import '../static/styles/PhotoGallery.css'; // Upewnij się, że ścieżka do CSS jest poprawna

// Import zdjęć
import photo1 from '../static/media/Gallery/723A3815.jpg';
import photo2 from '../static/media/Gallery/723A3816x.jpg';
import photo3 from '../static/media/Gallery/723A3826.jpg';
import photo4 from '../static/media/Gallery/723A3834.jpg';
import photo5 from '../static/media/Gallery/723A3838.jpg';
import photo6 from '../static/media/Gallery/723A3847.jpg';
import photo7 from '../static/media/Gallery/723A3849.jpg';

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7
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
        <h2>Galeria</h2>
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
