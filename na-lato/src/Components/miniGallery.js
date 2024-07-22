import React, { useState } from 'react';
import './miniGallery.css';
import zdjecie1 from '../static/media/Gallery/16/723A3828.jpg';
import zdjecie2 from '../static/media/Gallery/16/723A3826.jpg';
import zdjecie3 from '../static/media/Gallery/16/_MG_8455.jpg';
import zdjecie4 from '../static/media/Gallery/16/kuter.jpg';
import ButtonWrapper from './ButtonWrapper';

const images = [
    zdjecie1,
    zdjecie2,
    zdjecie3,
    zdjecie4
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (image, index) => {
        if (window.innerWidth > 768) {
            setSelectedImage(image);
            setCurrentIndex(index);
        }
    };

    const handleClose = () => {
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    const showPrevious = (event) => {
        event.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]);
    };

    const showNext = (event) => {
        event.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]);
    };

    return (
        <div className="gallery-container">
            <div className="custom-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        onClick={() => handleClick(image, index)}
                        className="custom-thumbnail"
                    />
                ))}
            </div>
    
            {selectedImage && (
                <div className="custom-modal" onClick={handleClose}>
                    <span className="custom-close">&times;</span>
                    <span className="arrow arrow-left" onClick={showPrevious}>&#10094;</span>
                    <img className="custom-modal-content" src={selectedImage} alt="Selected" />
                    <span className="arrow arrow-right" onClick={showNext}>&#10095;</span>
                </div>
            )}
        </div>
    );
};

export default Gallery;
