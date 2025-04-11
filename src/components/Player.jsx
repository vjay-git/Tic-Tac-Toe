import React,{useState} from 'react'
import Button from './Button';
function Player({InitialName,PlayerSymbol}) 
{
  const [isName,setIsName] = useState(InitialName)
  const[isEditing,setIsEditing] = useState(false)
   function ChangeName(event)
  {
    setIsName(event.target.value);
  } 
  function Change()
  {
    setIsEditing((isEditing)=>!isEditing);
  }

  let playerName;
  {(isEditing)?playerName=
    <span className="player-name"> {isName}</span>
    :playerName=<input type='text' placeholder="Player Name" defaultValue="" onChange={ChangeName}></input>}
    let State = (isEditing)?"Edit":"Save";
    return (     
      <> 
      <li>
      <span className="player">
      {playerName}
      <span className="player-symbol">{PlayerSymbol}</span>
      </span>
      <Button onSelect={Change}>{State}</Button>
      </li>
      </>
     
  )
}

export default Player
