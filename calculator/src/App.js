import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

let keys = [String.fromCharCode(247), 7, 8, 9, "x", 4, 5, 6, String.fromCharCode(8212),  1, 2, 3, "+"]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    alert('hi')
  
    // this.setState({ total: 1 })
  }

  render() {
    return (
      <div className="main">
      <CalculatorDisplay total={this.state.total}/>
        <ActionButton text='clear' />
        {keys.map(key => {
          return <NumberButton 
          handleClick={this.handleClick}
          buttonStyle={(typeof key === 'number') ? 'num' : 'symbol'} 
          text={key} />
        })}
        <ActionButton text='0' />
        <NumberButton buttonStyle='symbol' text='=' />
      </div>
    );
  }
};

export default App;
