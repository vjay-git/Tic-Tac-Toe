import React from 'react';

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          Player <strong>{turn.player}</strong> selected row <strong>{turn.square.row + 1}</strong>, column <strong>{turn.square.col + 1}</strong>
        </li>
      ))}
    </ol>
  );
}

export default Log;
