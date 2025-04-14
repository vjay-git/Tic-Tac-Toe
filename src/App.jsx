import React, { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './components/WinningPossibilities';
import GameOver from './components/Gameover';

const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  // Make a deep copy of the game board to update based on turns
  const gameBoard = [...InitialGameBoard].map(innerArray => [...innerArray]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }

  // Check winner
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const { row: r1, column: c1 } = combination[0];
    const { row: r2, column: c2 } = combination[1];
    const { row: r3, column: c3 } = combination[2];

    const symbol1 = gameBoard[r1][c1];
    const symbol2 = gameBoard[r2][c2];
    const symbol3 = gameBoard[r3][c3];

    if (symbol1 && symbol1 === symbol2 && symbol1 === symbol3) {
      winner = symbol1;
    }
  }
  const hasDraw= gameTurns.length==9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // Prevent selecting a filled square or playing after win
    if (gameBoard[rowIndex][colIndex] || winner) return;

    setGameTurns(prevTurns => [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prevTurns,
    ]);

    setActivePlayer(curr => (curr === 'X' ? 'O' : 'X'));
  }
  function Rematch()
{
  setGameTurns([]);
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player InitialName="Player 1" PlayerSymbol="X" isActive={activePlayer === 'X'} />
          <Player InitialName="Player 2" PlayerSymbol="O" isActive={activePlayer === 'O'} />
        </ol>

        {(winner || hasDraw) && <GameOver winner ={winner} onRestart ={Rematch}/>}

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
