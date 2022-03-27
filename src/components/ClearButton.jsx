import React from 'react';
import '../styles/ClearButton.css';

const ClearButton = (props) => {
  return (
    <button className="clear-button" onClick={props.doClick}>
      {props.children}
    </button>
  );
}

export default ClearButton;