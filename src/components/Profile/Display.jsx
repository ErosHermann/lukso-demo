import React from 'react';

const Display = ({ numbers }) => {
  const sumGreen = numbers
    .filter(num => num.type === 'A')
    .reduce((acc, curr) => acc + curr.number, 0);

  const sumRed = numbers
    .filter(num => num.type === 'B')
    .reduce((acc, curr) => acc + curr.number, 0);

  return (
    <div className="number-display">
      <div className="number-section">
        {numbers.map((num, index) => (
          <p
            key={index}
            className={num.type === 'A' ? 'number-green' : 'number-red'}
          >
            {num.number}
          </p>
        ))}
      </div>
      <div className="sum-section">
        <p><strong>Sum of Bets in Favor: </strong>{sumGreen}</p>
        <p><strong>Sum of Bets Against: </strong>{sumRed}</p>
      </div>
    </div>
  );
};

export default Display;
