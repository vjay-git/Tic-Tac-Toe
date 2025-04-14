import React from 'react';

const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function GameBoard({ onSelectSquare, turns }) {
  // Build the board from turns instead of using useState
  let gameBoard = InitialGameBoard.map(row => [...row]); // create a fresh copy

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((PlayerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={PlayerSymbol!=null}>
                  {PlayerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
