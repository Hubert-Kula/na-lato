import React from 'react';
import './l.css';

const TopSection = ({ text, imageUrl }) => {
  return (
    <div className="top-section">
      <img className="image" src={imageUrl} alt="Top" />
      <div className="text">
        {text}
      </div>
    </div>
  );
};

export default TopSection;
