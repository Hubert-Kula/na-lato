import React, { useState } from 'react';
import './miniGallery.css';
import zdjecie1 from '../Zdj/723A3834.jpg';
import zdjecie2 from '../Zdj/723A3838.jpg';
import zdjecie3 from '../Zdj/723A3847.jpg';
import zdjecie4 from '../Zdj/723A3834.jpg'; // Upewnij się, że ta ścieżka jest poprawna

const images = [
    zdjecie1,
    zdjecie2,
    zdjecie3,
    zdjecie4
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery-container">
            <div className="custom-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        onClick={() => handleClick(image)}
                        className="custom-thumbnail"
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="custom-modal" onClick={handleClose}>
                    <span className="custom-close">&times;</span>
                    <img className="custom-modal-content" src={selectedImage} alt="Selected" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
