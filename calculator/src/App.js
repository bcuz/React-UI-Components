import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

let keys = ["%", 7, 8, 9, "x", 4, 5, 6, "-",  1, 2, 3, "+"]

const App = () => {
  return (
    <div>
      <ActionButton text='clear' />
      {/* if not a num style it differently */}
      {keys.map(key => {
        return <NumberButton buttonStyle={(true) ? 'todo' : ''} text={key} />
      })}
      <ActionButton text='0' />
    </div>
  );
};

export default App;
