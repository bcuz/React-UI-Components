import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

let keys = ["%", 7, 8, 9, "x", 4, 5, 6, "-",  1, 2, 3, "+"]

const App = () => {
  return (
    <div className="main">
      <ActionButton text='clear' />
      {/* if not a num style it differently */}
      {keys.map(key => {
        return <NumberButton 
        buttonStyle={(typeof key === 'number') ? 'num' : 'symbol'} 
        text={key} />
      })}
      <ActionButton text='0' />
      <NumberButton buttonStyle='symbol' text='=' />
    </div>
  );
};

export default App;
