import React, { useState } from 'react';
import Button from './Button';

function Player({ InitialName, PlayerSymbol, isActive }) {
  const [isName, setIsName] = useState(InitialName);
  const [isEditing, setIsEditing] = useState(false);

  function ChangeName(event) {
    setIsName(event.target.value);
  }

  function Change() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{isName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        placeholder="Player Name"
        required
        value={isName}
        onChange={ChangeName}
      />
    );
  }

  const stateLabel = isEditing ? 'Save' : 'Edit';

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{PlayerSymbol}</span>
      </span>
      <Button onSelect={Change}>{stateLabel}</Button>
    </li>
  );
}

export default Player;
