import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

let keys = ["%", 7, 8, 9, "x", 4, 5, 6, "-",  1, 2, 3, "+"]

const App = () => {
  return (
    <div>
      {keys.map(key => <NumberButton key_type={key} /> )}
    </div>
  );
};

export default App;
