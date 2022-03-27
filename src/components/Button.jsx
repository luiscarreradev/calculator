import React from 'react';
import '../styles/Button.css'

const Button = (props) => {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <button 
      className={`button-container ${isOperator(props.children) ? 'operator' : null}`}
      onClick={() => props.doClick(props.children)}>
      {props.children}
    </button>
  );
}

export default Button;