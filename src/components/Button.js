import React from 'react'
import './Button.scss'

const Button = ({ buttonDisplayName, onClick, id, buttonSize }) => {
  return <button size={buttonSize} id={id} onClick={onClick}>{buttonDisplayName}</button>
}

export default Button