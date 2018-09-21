import React from 'react';
import './FinalModal.css';
import ResetButton from '../ResetButton/ResetButton.js';

const finalModal = (props) => {
  let winner = null;
  if(props.red){
    winner = <p className="RedColor">Red Team is the Winner!!</p>
  } else if (props.blue){
    winner = <p className="BlueColor">Blue Team is the Winner!!</p>
  }
  return (
    <div className="Backdrop">
      <div className="FinalModal">
        <p>The Game has finished!</p>
        { winner }
        <ResetButton reset={props.reset} />
      </div>
    </div>
  );
}

export default finalModal;
