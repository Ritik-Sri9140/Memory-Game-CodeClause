import React from 'react';
import './App.css';

const Score = ({ score }) => {
  return (
    <div className="score">
      Score: {score}
    </div>
  );
};

export default Score;