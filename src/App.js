import React, { useState, useEffect } from 'react';
import Board from './Board';
import Timer from './Timer';
import Score from './Score';
import ResetButton from './ResetButton';
import './App.css';

const initialCards = [
  { id: 1, content: 'A' },
  { id: 2, content: 'A' },
  { id: 3, content: 'B' }, 
  { id: 4, content: 'B' },
];

const shuffleCards = (cards) => {
  return cards.sort(() => Math.random() - 0.5);
};

const App = () => {
  const [cards, setCards] = useState(shuffleCards(initialCards));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.content === secondCard.content) {
        setMatchedCards([...matchedCards, firstCard.content]);
        setScore(score + 1);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCards.length === initialCards.length / 2) {
      setIsGameOver(true);
      setTimerActive(false);
    }
  }, [matchedCards]);

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      setFlippedCards([...flippedCards, card]);
      if (!timerActive) {
        setTimerActive(true);
      }
    }
  };

  const gameOver = () => {
    if(isGameOver){
      time(false)
    }
  }

  const handleReset = () => {
    setCards(shuffleCards(initialCards));
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setTime(0);
    setIsGameOver(false);
    setTimerActive(false);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Score score={score} />
      <Timer time={time} />
      <Board cards={cards} onCardClick={handleCardClick} flippedCards={flippedCards} />
      {isGameOver && <div className="game-over">Game Over!</div>}
      <ResetButton onReset={handleReset} />
    </div>
  );
};

export default App;