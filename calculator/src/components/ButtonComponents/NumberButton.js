import React from 'react';
import './Button.css';

function handleClick(e) {
  // e.preventDefault();
  // alert('hi')

  // this.setState({ total: 1 })
}

const NumberButton = props => {
  return (
    
    <div onClick={handleClick} className={props.buttonStyle + ' btn'} >
    {props.text}
    </div>
  );
};

export default NumberButton;