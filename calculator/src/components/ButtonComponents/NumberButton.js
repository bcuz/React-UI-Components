import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (    
    <div onClick={props.handleClick} className={props.buttonStyle + ' btn'} >
    {props.text}
    </div>
  );
};

export default NumberButton;