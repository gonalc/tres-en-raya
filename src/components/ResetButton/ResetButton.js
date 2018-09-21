import React from 'react';
import './ResetButton.css';

const resetButton = (props) => (
  <button className="ResetButton" onClick={props.reset}>Reset Table</button>
);

export default resetButton;
