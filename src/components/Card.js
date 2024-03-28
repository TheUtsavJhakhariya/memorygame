// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ id, image, isFlipped, onClick }) => {
  const handleClick = () => {
    if (!isFlipped) {
      onClick(id);
    }
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <img src={isFlipped ? image : 'https://opengameart.org/sites/default/files/card%20back%20red.png'} alt="Card" />
    </div>
  );
};

export default Card;
