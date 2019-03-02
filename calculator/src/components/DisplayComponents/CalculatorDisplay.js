import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className='display'>{props.total}</div>
  );
};

export default CalculatorDisplay;