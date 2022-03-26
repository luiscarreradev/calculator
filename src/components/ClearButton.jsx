import React from 'react';
import '../styles/ClearButton.css';

const ClearButton = (props) => {
  return (
    <div className="clear-button">
      {props.children}
    </div>
  );
}

export default ClearButton;