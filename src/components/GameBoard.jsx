import React,{useState} from 'react';
const InitialGameBoard=
    [[null,null,null],
    [null,null,null],
    [null,null,null]
];
const GameBoard = () => 
{
    const [gameBoard,setGameBoard] = useState(InitialGameBoard); 
function handleSelectSquare(rowIndex,colIndex) 
{

    setGameBoard((previousGameBoard) => {
        const UpdatedGameBoard=[...previousGameBoard.map(InnerArray=>[...InnerArray])];
        UpdatedGameBoard[rowIndex][colIndex]='D';
        return UpdatedGameBoard;
        
    });
}
  return (
    <ol id="game-board">
        {gameBoard.map((row,rowIndex)=>(
            <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                    <li key={colIndex}>
                        <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>
        ))}      
    </ol>
  )
}
export default GameBoard
