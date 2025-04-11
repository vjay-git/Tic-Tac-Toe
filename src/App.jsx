import React,{useState} from 'react'
import Player from './components/player'
import GameBoard from './components/GameBoard';
function App() 
{
  return (
    <main>
      <div id ="game-container">
      <ol id="players">

      <Player InitialName="" PlayerSymbol="X"/>
      <Player InitialName="" PlayerSymbol="O"/>
      
    </ol>
    <GameBoard />
  </div>
  
    </main>
    
    
  );
}

export default App
