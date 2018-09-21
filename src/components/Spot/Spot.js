import React from 'react';
import './Spot.css';

const spot = (props) => {
  return (
    <div className={props.box.config.team} onClick={props.func} />
  );
}

export default spot;
