// src/components/Board/Board.js
import React from 'react';
import Card from '../Card'; // Corrected import path
import './Board.css';

const Board = ({ cards, handleCardClick }) => {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default Board;
