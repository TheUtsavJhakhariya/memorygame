// src/components/Game.js
import React, { useState } from 'react';
import Board from '../Board/Board'; // Corrected import path

const Game = () => {
  const [cards, setCards] = useState([
    { id: 1, image: 'https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/439/10H__11470__91447.1681313264.jpg?c=1', isFlipped: false },
    { id: 2, image: 'https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/441/6D__92916__54479.1681313264.jpg?c=1', isFlipped: false },
    { id: 3, image: 'https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/445/5S__90574__11272.1681313264.jpg?c=1', isFlipped: false },
    { id: 4, image: 'https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/448/QD__14920__31462.1681313265.jpg?c=1', isFlipped: false },
    { id: 5, image: 'https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1', isFlipped: false },
    { id: 6, image: 'https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/444/3C__99122__01407.1681313264.jpg?c=1', isFlipped: false },
  ]);

  const handleCardClick = id => {
    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);
  };

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Board cards={cards} handleCardClick={handleCardClick} />
      <h2>Refresh to start this game</h2>
    </div>
  );
};

export default Game;
