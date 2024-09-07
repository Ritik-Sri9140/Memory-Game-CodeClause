import React from 'react';
import './App.css';

const ResetButton = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;