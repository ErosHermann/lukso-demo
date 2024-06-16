import React, { useState } from 'react';

const Join = ({ onSubmit }) => {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');

  const handleSubmitA = () => {
    if (numberA) {
      onSubmit(numberA, 'A');
      setNumberA('');
    }
  };

  const handleSubmitB = () => {
    if (numberB) {
      onSubmit(numberB, 'B');
      setNumberB('');
    }
  };

  return (
    <div className="join-container">
      <div className="form-container">
        <input
          type="number"
          value={numberA}
          onChange={(e) => setNumberA(e.target.value)}
          placeholder="Bet Amount"
        />
        <button className="agree-button" onClick={handleSubmitA}>Sure thing!</button>
      </div>
      <div className="form-container">
        <input
          type="number"
          value={numberB}
          onChange={(e) => setNumberB(e.target.value)}
          placeholder="Bet Amount"
        />
        <button className="disagree-button" onClick={handleSubmitB}>Hell no!</button>
      </div>
    </div>
  );
};

export default Join;
