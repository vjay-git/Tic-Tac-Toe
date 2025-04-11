import React from 'react'

function Button({children,onSelect}) {
  return (
    <button onClick={onSelect}>{children}</button>
  )
}

export default Button
