import React from 'react';
import './p.css';

const BottomSection = ({ text, imageUrl }) => {
  return (
    <div className="bottom-section">
      <div className="text">
        {text}
      </div>
      <img className="image" src={imageUrl} alt="Bottom" />
    </div>
  );
};

export default BottomSection;
