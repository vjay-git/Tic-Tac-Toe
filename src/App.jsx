import React, { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  // 🔧 FIX: Receive rowIndex and colIndex as arguments
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currPlayer) => (currPlayer === 'X' ? 'O' : 'X'));

    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player InitialName="Player 1" PlayerSymbol="X" isActive={activePlayer === 'X'} />
          <Player InitialName="Player 2" PlayerSymbol="O" isActive={activePlayer === 'O'} />
        </ol>

        {/* Pass rowIndex and colIndex from GameBoard */}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

    <Log turns ={gameTurns}/>

    </main>
  );
}

export default App;
