import React from 'react';
import './App.css';

const Card = ({ card, onClick, isFlipped }) => {
  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      {isFlipped ? card.content : '?'}
    </div>
  );
};

export default Card;