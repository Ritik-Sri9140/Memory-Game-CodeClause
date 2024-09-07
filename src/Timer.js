import React from 'react';
import './App.css';

const Timer = ({ time }) => {
  return (
    <div className="timer">
      Time: {time}s
    </div>
  );
};

export default Timer;