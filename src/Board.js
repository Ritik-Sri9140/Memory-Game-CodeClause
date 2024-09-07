import React from 'react';
import Card from './Card';
import './App.css';

const Board = ({ cards, onCardClick, flippedCards }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => onCardClick(card)}
          isFlipped={flippedCards.includes(card)}
        />
      ))}
    </div>
  );
};

export default Board;