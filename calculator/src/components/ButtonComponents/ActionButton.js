import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div onClick={props.handleClick} className='action'>{props.text}</div>
  );
};

export default ActionButton;
