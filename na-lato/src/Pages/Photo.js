import React from 'react';
import '../Photo.css';

const Photo = ({ src, alt, onClick }) => (
  <div className="photo-container" onClick={onClick}>
    <img src={src} alt={alt} className="photo" />
  </div>
);

export default Photo;
